package main

import (
	"context"
	"fmt"
	"log"
	"net/http"

	firebase "firebase.google.com/go"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"

	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"github.com/sirupsen/logrus"
	"github.com/zawawahoge/youtube-information/api/config"
	"github.com/zawawahoge/youtube-information/api/factory"
	"github.com/zawawahoge/youtube-information/api/grpcauth"
	"github.com/zawawahoge/youtube-information/api/protobuf/apiservice"
	"github.com/zawawahoge/youtube-information/api/serviceimpl"
)

func main() {
	logger := logrus.New()
	conf := config.MustConfigFromEnv()

	firebaseApp, err := firebase.NewApp(context.Background(), nil)
	if err != nil {
		log.Fatalf("error initializing app: %v\n", err)
	}

	port := conf.Port
	if port == "" {
		port = "9090"
		log.Printf("Defaulting to port %s", port)
	}

	youtube := serviceimpl.NewYoutubeService(conf.YoutubeConfig)
	authService := serviceimpl.NewAuthService(firebaseApp)
	f := factory.New(youtube, authService)

	grpcServer := grpc.NewServer(
		grpc.ChainUnaryInterceptor(
			grpcauth.UnaryServerInterceptor(authService.GetAuthFunc()),
		),
	)
	apiservice.RegisterCommonServiceServer(grpcServer, f.NewCommonServiceServer())
	reflection.Register(grpcServer)

	wrappedGrpc := grpcweb.WrapServer(grpcServer)
	handler := func(resp http.ResponseWriter, req *http.Request) {
		allowCors(resp, req)
		wrappedGrpc.ServeHTTP(resp, req)
		c := &http.Cookie{
			SameSite: http.SameSiteNoneMode,
			Secure:   true,
		}
		http.SetCookie(resp, c)
	}
	httpServer := http.Server{
		Addr:    fmt.Sprintf(":%s", port),
		Handler: http.HandlerFunc(handler),
	}
	logger.Printf("Start listening and serving at port = %s", port)
	if err := httpServer.ListenAndServe(); err != nil {
		logger.Fatal(err.Error())
	}
}

func allowCors(resp http.ResponseWriter, req *http.Request) {
	resp.Header().Set("Access-Control-Allow-Origin", "*")
	resp.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	resp.Header().Set("Access-Control-Expose-Headers", "grpc-status, grpc-message")
	resp.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, XMLHttpRequest, x-user-agent, x-grpc-web, grpc-status, grpc-message, authorization")
}
