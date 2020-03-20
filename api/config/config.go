package config

import (
	"fmt"
	"os"

	"github.com/joho/godotenv"
)

// YoutubeConfig is config of youtube client.
type YoutubeConfig struct {
	ClientID     string
	ClientSecret string
	RedirectURL  string
}

// MustConfigFromEnv is method to get config from environment variables. If it fails, the server is panic.
func MustConfigFromEnv() YoutubeConfig {
	godotenv.Load()
	return YoutubeConfig{
		ClientID:     mustReadFromEnv("YOUTUBE_CLIENT_ID"),
		ClientSecret: mustReadFromEnv("YOUTUBE_CLIENT_SECRET"),
		RedirectURL:  mustReadFromEnv("YOUTUBE_REDIRECT_URL"),
	}
}

func mustReadFromEnv(key string) string {
	val := os.Getenv(key)
	if val == "" {
		panic(fmt.Sprintf("failed to get environment variable; key = %s", key))
	}
	return val
}
