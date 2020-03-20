package factory

import (
	"github.com/zawawahoge/youtube-information/api/service"
	"github.com/zawawahoge/youtube-information/api/serviceimpl"
)

// Factory is interface of factory.
type Factory interface {
	NewCommonServiceServer() service.CommonServiceServer
}

type factory struct {
	youtube service.YoutubeServiceServer
}

// New is constructor of factory.
func New(
	youtube service.YoutubeServiceServer,
) Factory {
	return &factory{
		youtube: youtube,
	}
}

// NewCommonServiceServer is constructor of youtube service server with config.
func (f *factory) NewCommonServiceServer() service.CommonServiceServer {
	return serviceimpl.NewCommonServiceServer(f.youtube)
}
