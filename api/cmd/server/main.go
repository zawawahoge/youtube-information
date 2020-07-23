package main

import (
	"fmt"
	"log"
	"net"

	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"

	"github.com/sirupsen/logrus"
	"github.com/zawawahoge/youtube-information/api/config"
	"github.com/zawawahoge/youtube-information/api/factory"
	"github.com/zawawahoge/youtube-information/api/protobuf/apiservice"
	"github.com/zawawahoge/youtube-information/api/serviceimpl"
)

func main() {
	logger := logrus.New()
	logger.Println("gRPC server is initialized...")
	youtubeConfig := config.MustConfigFromEnv()
	youtube := serviceimpl.NewYoutubeServiceServer(youtubeConfig)
	f := factory.New(youtube)

	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", 8080))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	grpcServer := grpc.NewServer()
	apiservice.RegisterCommonServiceServer(grpcServer, f.NewCommonServiceServer())
	reflection.Register(grpcServer)
	log.Fatal(grpcServer.Serve(lis))
}
