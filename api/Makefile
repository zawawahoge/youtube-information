init:
	cp .env.local .env
	go mod download
	go get -u -v github.com/golang/protobuf/protoc-gen-go

run:
	go run main.go

build:
	docker build -t youtube-information .

envoy:
	docker run -d -v ${PWD}/envoy.yaml:/etc/envoy/envoy.yaml:ro --network=host envoyproxy/envoy:v1.15.0
