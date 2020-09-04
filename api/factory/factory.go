package factory

import (
	"github.com/zawawahoge/youtube-information/api/protobuf/apiservice"
	"github.com/zawawahoge/youtube-information/api/service"
	"github.com/zawawahoge/youtube-information/api/serviceimpl"
)

// Factory is interface of factory.
type Factory interface {
	NewCommonServiceServer() apiservice.CommonServiceServer
}

type factory struct {
	youtube service.YoutubeService
	auth    service.AuthService
}

// New is constructor of factory.
func New(
	youtube service.YoutubeService,
	auth service.AuthService,
) Factory {
	return &factory{
		youtube: youtube,
		auth:    auth,
	}
}

// NewCommonServiceServer is constructor of youtube service server with config.
func (f *factory) NewCommonServiceServer() apiservice.CommonServiceServer {
	return serviceimpl.NewCommonServiceServer(f.youtube)
}
