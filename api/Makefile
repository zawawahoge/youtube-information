init:
	cp .env.local .env
	go mod download
	go get -u -v github.com/golang/protobuf/protoc-gen-go

run:
	go run ./cmd/server/*.go
