package service

import (
	"context"

	"github.com/zawawahoge/youtube-information/api/grpcauth"
)

// AuthInfo is information of auth.
type AuthInfo struct {
	UID string
}

// AuthContextKey is a key of auth context.
type AuthContextKey string

// AuthService is interface of auth service server.
type AuthService interface {
	VerifyToken(ctx context.Context, idToken string) (*AuthInfo, error)
	GetAuthFunc() grpcauth.AuthFunc
}
