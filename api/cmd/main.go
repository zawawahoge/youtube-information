package main

import (
	"net/http"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"

	"github.com/zawawahoge/youtube-information/api/config"
	"github.com/zawawahoge/youtube-information/api/factory"
	"github.com/zawawahoge/youtube-information/api/handler"
	"github.com/zawawahoge/youtube-information/api/serviceimpl"
)

func corsConfig() middleware.CORSConfig {
	return middleware.CORSConfig{
		AllowOrigins: []string{"*"},
		AllowMethods: []string{http.MethodPost, http.MethodGet, http.MethodPut, http.MethodDelete},
		AllowHeaders: []string{
			echo.HeaderAuthorization,
			echo.HeaderContentType,
			echo.HeaderAcceptEncoding,
			echo.HeaderAccept,
			"X-Locale",
		},
		// Allow cache 1 hour. We don't make this too long so that this config applies
		// soon when we update the api server.
		MaxAge: 3600,
	}
}

func main() {
	youtubeConfig := config.MustConfigFromEnv()
	youtube := serviceimpl.NewYoutubeServiceServer(youtubeConfig)
	f := factory.New(youtube)

	e := echo.New()
	e.Use(middleware.Logger())
	e.Use(middleware.CORSWithConfig(corsConfig()))

	handler.HandleCommonService(e, f.NewCommonServiceServer())

	e.Logger.Fatal(e.Start(":8080"))
}
