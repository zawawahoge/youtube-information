package serviceimpl

import (
	"context"

	"github.com/zawawahoge/youtube-information/api/config"
	"github.com/zawawahoge/youtube-information/api/service"
)

type youtubeServiceServer struct {
	config config.YoutubeConfig
}

// NewYoutubeService is constructor of youtube service server.
func NewYoutubeService(config config.YoutubeConfig) service.YoutubeService {
	return &youtubeServiceServer{
		config: config,
	}
}

func (s *youtubeServiceServer) GetURLToRedirect(ctx context.Context) {

}
