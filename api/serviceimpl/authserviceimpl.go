package serviceimpl

import (
	"context"
	"fmt"

	firebase "firebase.google.com/go"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/metadata"
	"google.golang.org/grpc/status"

	"github.com/zawawahoge/youtube-information/api/grpcauth"
	"github.com/zawawahoge/youtube-information/api/service"
)

type authServiceServer struct {
	firebaseApp *firebase.App
}

// NewAuthService is constructor of Auth service server.
func NewAuthService(firebaseApp *firebase.App) service.AuthService {
	return &authServiceServer{
		firebaseApp: firebaseApp,
	}
}

func (s *authServiceServer) VerifyToken(ctx context.Context, idToken string) (*service.AuthInfo, error) {
	client, err := s.firebaseApp.Auth(ctx)
	if err != nil {
		return nil, err
	}

	token, err := client.VerifyIDToken(ctx, idToken)
	if err != nil {
		return nil, err
	}

	authInfo := &service.AuthInfo{
		UID: token.UID,
	}
	return authInfo, nil
}

func (s *authServiceServer) GetAuthFunc() grpcauth.AuthFunc {
	return func(ctx context.Context) (context.Context, error) {
		fmt.Println("auth func")
		md, ok := metadata.FromIncomingContext(ctx)
		fmt.Println("auth func1")
		if !ok {
			fmt.Println("not found metadata")
			return nil, status.Errorf(codes.Unauthenticated, "not found metadata")
		}
		fmt.Println("auth func2")
		if _, ok := md["authorization"]; !ok {
			fmt.Println("no authorization key")
			return nil, status.Errorf(codes.Unauthenticated, "no authorization key")
		}
		tokens := md["authorization"]
		fmt.Println("auth func3")
		if len(tokens) != 1 {
			fmt.Println("unauthenticated")
			return nil, status.Errorf(codes.Unauthenticated, "invalid number of tokens")
		}
		idToken := tokens[0]
		fmt.Println("auth func4")
		if idToken == "" {
			fmt.Println("empty token")
			return nil, status.Errorf(codes.Unauthenticated, "empty token")
		}

		authInfo, err := s.VerifyToken(ctx, idToken)
		fmt.Println("auth func5")
		if err != nil {
			fmt.Printf("verification of token failed; err = %s\n", err.Error())
			return nil, status.Errorf(codes.Unauthenticated, "verification of token failed")
		}
		fmt.Println("success")

		ctx = context.WithValue(ctx, service.AuthContextKey("UID"), authInfo.UID)
		return ctx, nil
	}
}
