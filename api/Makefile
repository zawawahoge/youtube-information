init:
	cp .env.local .env
	go mod download
	go get -u -v github.com/gorilla/handlers
	go get -u -v github.com/grpc-ecosystem/grpc-gateway/protoc-gen-grpc-gateway
	go get -u -v github.com/grpc-ecosystem/grpc-gateway/protoc-gen-swagger
	go get -u -v github.com/golang/protobuf/protoc-gen-go

run:
	go run ./cmd/server/*.go

reverse-proxy:
	go run ./cmd/reverse-proxy/*.go
