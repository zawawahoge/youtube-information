.PHONY: clean proto

all: clean proto

init:
	go get -u -v github.com/golang/protobuf/protoc-gen-go

FRONT_OUT_DIR=frontend/src/proto
proto:
	protoc -I./proto \
		--go_out=plugins=grpc:api \
		--js_out=import_style=commonjs:${FRONT_OUT_DIR} \
		--descriptor_set_out=api_descriptor.pb \
		--grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:${FRONT_OUT_DIR} \
		proto/*.proto

clean:
	rm -r api/protobuf/*
	rm -r frontend/src/proto/*

ping:
	grpcurl -plaintext localhost:8080 list

