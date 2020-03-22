.PHONY: clean proto

all: clean proto

proto:
	protoc -I./proto \
		-I${GOPATH}/pkg/mod/github.com/grpc-ecosystem/grpc-gateway@v1.13.0/third_party/googleapis \
		--dart_out=grpc:flutter/lib/protobuf \
		--go_out=plugins=grpc:api proto/*.proto

clean:
	rm -f flutter/lib/protobuf/*.dart
	rm -rf api/protobuf/*

ping:
	grpcurl -plaintext localhost:8080 list

