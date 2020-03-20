package model

// ChannelID is id of youtube channel.
type ChannelID string

// ChannelName is name of youtube channel.
type ChannelName string

// Channel is model of youtube channel.
type Channel struct {
	ID   ChannelID
	Name ChannelName
}
