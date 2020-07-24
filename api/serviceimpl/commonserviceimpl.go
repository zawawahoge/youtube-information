package serviceimpl

import (
	"context"
	"fmt"

	"github.com/sirupsen/logrus"
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
	logger := logrus.New()
	logger.Println(req)

	var channels []*model.Channel
	var apiChannels []*apiservice.Channel
	for i := 0; i < 100; i++ {
		c := &model.Channel{
			ID: model.ChannelID(fmt.Sprintf("id-%d", i)),
		}
		channels = append(channels, c)
		apiChannels = append(apiChannels, converter.NewAPIChannel(c))
	}
	res := &apiservice.ListSubscribedChannelsResponse{
		Channels: apiChannels,
	}
	logger.Println(res)
	return res, nil
}

func (s *commonServiceServer) Ping(ctx context.Context, req *apiservice.PingRequest) (*apiservice.PingResponse, error) {
	log.Debugf("ping is called; ctx=%#v", ctx)
	fmt.Println(ctx)
	return &apiservice.PingResponse{}, nil
}
