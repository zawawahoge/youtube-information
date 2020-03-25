package serviceimpl

import (
	"context"
	"fmt"

	log "github.com/sirupsen/logrus"
	"github.com/zawawahoge/youtube-information/api/converter"
	"github.com/zawawahoge/youtube-information/api/model"
	"github.com/zawawahoge/youtube-information/api/protobuf/apiservice"
	"github.com/zawawahoge/youtube-information/api/service"
)

type commonServiceServer struct {
	youtube service.YoutubeServiceServer
}

// NewCommonServiceServer is constructor of common service server.
func NewCommonServiceServer(youtube service.YoutubeServiceServer) apiservice.CommonServiceServer {
	return &commonServiceServer{
		youtube: youtube,
	}
}

func (s *commonServiceServer) ListSubscribedChannels(ctx context.Context, req *apiservice.ListSubscribedChannelsRequest) (*apiservice.ListSubscribedChannelsResponse, error) {
	channel := &model.Channel{
		ID:   model.ChannelID("123"),
		Name: model.ChannelName("channel 123"),
	}
	apiChannel := converter.NewAPIChannel(channel)
	res := &apiservice.ListSubscribedChannelsResponse{
		Channels: []*apiservice.Channel{apiChannel},
	}
	fmt.Println(ctx)
	return res, nil
}

func (s *commonServiceServer) Ping(ctx context.Context, req *apiservice.PingRequest) (*apiservice.PingResponse, error) {
	log.Debugf("ping is called; ctx=%#v", ctx)
	fmt.Println(ctx)
	return &apiservice.PingResponse{}, nil
}
