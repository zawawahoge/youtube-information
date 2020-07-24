.PHONY: clean proto

all: clean proto

init:
	go get -u -v github.com/golang/protobuf/protoc-gen-go

proto:
	protoc -I./proto \
		--go_out=plugins=grpc:api \
		--grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:frontend/src/proto \
		proto/*.proto

clean:
	rm -r api/protobuf/*
	rm -r frontend/src/proto/*

ping:
	grpcurl -plaintext localhost:8080 list

