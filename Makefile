.PHONY: clean proto

all: clean proto

init:
	go get -u -v github.com/golang/protobuf/protoc-gen-go

FRONT_OUT_DIR=frontend/src/proto
proto:
	protoc -I./proto \
		--include_imports \
		--go_out=plugins=grpc:api \
		--js_out=import_style=commonjs:${FRONT_OUT_DIR} \
		--grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:${FRONT_OUT_DIR} \
		proto/*.proto

clean:
	rm -r api/protobuf/*
	rm -r frontend/src/proto/*
