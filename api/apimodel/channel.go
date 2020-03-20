package apimodel

import "github.com/zawawahoge/youtube-information/api/model"

// Channel is apimodel of youtube channel.
type Channel struct {
	Name string `json:"name"`
}

// NewAPIChannel is construct of API Channel.
func NewAPIChannel(channel *model.Channel) *Channel {
	return &Channel{
		Name: string(channel.Name),
	}
}
