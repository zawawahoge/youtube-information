init:
	cp .env.local .env
	go mod download
	go get -u -v github.com/golang/protobuf/protoc-gen-go

run:
	go run main.go

encrypt:
	gcloud kms encrypt --location=global --keyring=api --plaintext-file=firebase-service-account.json --ciphertext-file=firebase-service-account.json.enc --key=api-server
