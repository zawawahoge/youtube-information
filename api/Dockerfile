FROM golang:1.14.2-buster as builder

ENV GOPATH=/go \
    GO111MODULE=on \
    PROJECT_ROOT=/go/src/github.com/zawawahoge/youtube-information/api/

WORKDIR ${PROJECT_ROOT}

COPY go.mod .
COPY go.sum .
RUN go mod download

COPY . . 

CMD ["go", "run", "./cmd/server"]

# RUN CGO_ENABLED=0 GOOS=linux go build -o app ./cmd/server

# FROM alpine:latest

# ENV BUILDER_ROOT /go/src/github.com/zawawahoge/youtube-information/api
# WORKDIR /root/

# COPY --from=builder ${BUILDER_ROOT}/app .
# COPY --from=builder ${BUILDER_ROOT}/.env .

# CMD ["./app"]
