package service

import "context"

// YoutubeServiceServer is a server to get redirect url.
type YoutubeServiceServer interface {
	GetURLToRedirect(ctx context.Context)
}
