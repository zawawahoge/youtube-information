package config

import (
	"os"

	"github.com/joho/godotenv"
)

// Config is config of app.
type Config struct {
	Port string
	YoutubeConfig
}

// YoutubeConfig is config of youtube client.
type YoutubeConfig struct {
	ClientID     string
	ClientSecret string
	RedirectURL  string
}

// MustConfigFromEnv is method to get config from environment variables. If it fails, the server is panic.
func MustConfigFromEnv() Config {
	godotenv.Load()
	return Config{
		YoutubeConfig: YoutubeConfig{
			ClientID:     os.Getenv("YOUTUBE_CLIENT_ID"),
			ClientSecret: os.Getenv("YOUTUBE_CLIENT_SECRET"),
			RedirectURL:  os.Getenv("YOUTUBE_REDIRECT_URL"),
		},
	}
}
