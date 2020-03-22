package service

import (
	"context"

	"github.com/zawawahoge/youtube-information/api/protobuf/apiservice"
)

// CommonServiceServer is a common server.
type CommonServiceServer interface {
	ListSubscribedChannels(ctx context.Context, req *ListSubscribedChannelsRequest) (*ListSubscribedChannelsResponse, error)
}

// ListSubscribedChannelsRequest is a request of listing subscribed channels.
type ListSubscribedChannelsRequest struct {
}

// ListSubscribedChannelsResponse is a response of listing subscribed channels.
type ListSubscribedChannelsResponse struct {
	Channels []*apiservice.Channel `json:"channels"`
}