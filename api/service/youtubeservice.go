package service

import "context"

// YoutubeService is a server to get redirect url.
type YoutubeService interface {
	GetURLToRedirect(ctx context.Context)
}
