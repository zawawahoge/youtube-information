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

	// var channelID string
	// fmt.Scanf("%s", &channelID)
	// fmt.Println(channelID)
	// ctx := context.Background()

	// conf := &oauth2.Config{
	// 	ClientID:     youtubeConfig.ClientID,
	// 	ClientSecret: youtubeConfig.ClientSecret,
	// 	RedirectURL:  youtubeConfig.RedirectURL,
	// 	Scopes:       []string{"https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.readonly"},
	// 	Endpoint: oauth2.Endpoint{
	// 		AuthURL:  "https://accounts.google.com/o/oauth2/auth",
	// 		TokenURL: "https://accounts.google.com/o/oauth2/token",
	// 	},
	// }

	// // Redirect user to consent page to ask for permission
	// // for the scopes specified above.
	// url := conf.AuthCodeURL("state", oauth2.AccessTypeOffline)
	// fmt.Printf("Visit the URL for the auth dialog: %v", url)

	// // Use the authorization code that is pushed to the redirect
	// // URL. Exchange will do the handshake to retrieve the
	// // initial access token. The HTTP Client returned by
	// // conf.Client will refresh the token as necessary.
	// var code string
	// if _, err := fmt.Scan(&code); err != nil {
	// 	log.Fatal(err)
	// }
	// tok, err := conf.Exchange(ctx, code)
	// if err != nil {
	// 	log.Fatal(err)
	// }
	// fmt.Printf("token = %s", tok)

	// client := conf.Client(ctx, tok)
	// client.Get("...")

}
