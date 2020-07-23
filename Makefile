.PHONY: clean proto

all: clean proto

init:
	go get -u -v github.com/golang/protobuf/protoc-gen-go

proto:
	protoc -I./proto \
		--go_out=plugins=grpc:api \
		--grpc-web_out=import_style=commonjs,mode=grpcwebtext:frontend \
		proto/*.proto

clean:
	rm -rf api/protobuf/*

ping:
	grpcurl -plaintext localhost:8080 list

