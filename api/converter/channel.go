package converter

import (
	"github.com/zawawahoge/youtube-information/api/model"
	"github.com/zawawahoge/youtube-information/api/protobuf/apiservice"
)

// NewAPIChannel is construct of API Channel.
func NewAPIChannel(channel *model.Channel) *apiservice.Channel {
	return &apiservice.Channel{
		Id:   string(channel.ID),
		Name: string(channel.Name),
	}
}
