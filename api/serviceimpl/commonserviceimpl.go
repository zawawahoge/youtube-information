package serviceimpl

import (
	"context"

	"github.com/zawawahoge/youtube-information/api/converter"
	"github.com/zawawahoge/youtube-information/api/model"
	"github.com/zawawahoge/youtube-information/api/protobuf/apiservice"
	"github.com/zawawahoge/youtube-information/api/service"
)

type commonServiceServer struct {
	youtube service.YoutubeServiceServer
}

// NewCommonServiceServer is constructor of common service server.
func NewCommonServiceServer(youtube service.YoutubeServiceServer) service.CommonServiceServer {
	return &commonServiceServer{
		youtube: youtube,
	}
}

func (s *commonServiceServer) ListSubscribedChannels(ctx context.Context, req *service.ListSubscribedChannelsRequest) (*service.ListSubscribedChannelsResponse, error) {
	channel := &model.Channel{
		ID:   model.ChannelID("123"),
		Name: model.ChannelName("channel 123"),
	}
	res := &service.ListSubscribedChannelsResponse{
		Channels: []*apiservice.Channel{converter.NewAPIChannel(channel)},
	}
	return res, nil
}
