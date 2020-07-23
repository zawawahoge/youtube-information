.PHONY: clean proto

all: clean proto

init:
	go get -u -v github.com/grpc-ecosystem/grpc-gateway/protoc-gen-grpc-gateway
	go get -u -v github.com/grpc-ecosystem/grpc-gateway/protoc-gen-swagger
	go get -u -v github.com/golang/protobuf/protoc-gen-go

proto:
	protoc -I./proto \
		-I${GOPATH}/pkg/mod/github.com/grpc-ecosystem/grpc-gateway@v1.14.6/third_party/googleapis \
		--dart_out=grpc:flutter/lib/protobuf \
		--go_out=plugins=grpc:api \
		--grpc-gateway_out=logtostderr=true:api \
		--grpc-web_out=import_style=commonjs,mode=grpcwebtext:frontend \
		proto/*.proto

clean:
	rm -f flutter/lib/protobuf/*.dart
	rm -rf api/protobuf/*

ping:
	grpcurl -plaintext localhost:8080 list

