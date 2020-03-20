package serviceimpl

import (
	"context"

	"github.com/zawawahoge/youtube-information/api/config"
	"github.com/zawawahoge/youtube-information/api/service"
)

type youtubeServiceServer struct {
	config config.YoutubeConfig
}

// NewYoutubeServiceServer is constructor of youtube service server.
func NewYoutubeServiceServer(config config.YoutubeConfig) service.YoutubeServiceServer {
	return &youtubeServiceServer{
		config: config,
	}
}

func (s *youtubeServiceServer) GetURLToRedirect(ctx context.Context) {

}
