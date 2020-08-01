package main

import (
	"fmt"
	"log"
	"net/http"

	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"

	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"github.com/sirupsen/logrus"
	"github.com/zawawahoge/youtube-information/api/config"
	"github.com/zawawahoge/youtube-information/api/factory"
	"github.com/zawawahoge/youtube-information/api/protobuf/apiservice"
	"github.com/zawawahoge/youtube-information/api/serviceimpl"
)

func main() {
	logger := logrus.New()
	conf := config.MustConfigFromEnv()

	if conf.Port == "" {
		port = "9090"
		log.Printf("Defaulting to port %s", port)
	}

	youtube := serviceimpl.NewYoutubeServiceServer(conf.YoutubeConfig)
	f := factory.New(youtube)

	grpcServer := grpc.NewServer()
	apiservice.RegisterCommonServiceServer(grpcServer, f.NewCommonServiceServer())
	reflection.Register(grpcServer)

	wrappedGrpc := grpcweb.WrapServer(grpcServer)
	handler := func(resp http.ResponseWriter, req *http.Request) {
		allowCors(resp, req)
		wrappedGrpc.ServeHTTP(resp, req)
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
	resp.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, XMLHttpRequest, x-user-agent, x-grpc-web, grpc-status, grpc-message")
}
