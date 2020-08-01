import * as jspb from "google-protobuf";

export class PingRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: PingRequest
  ): PingRequest.AsObject;
  static serializeBinaryToWriter(
    message: PingRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): PingRequest;
  static deserializeBinaryFromReader(
    message: PingRequest,
    reader: jspb.BinaryReader
  ): PingRequest;
}

export namespace PingRequest {
  export type AsObject = {};
}

export class PingResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: PingResponse
  ): PingResponse.AsObject;
  static serializeBinaryToWriter(
    message: PingResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): PingResponse;
  static deserializeBinaryFromReader(
    message: PingResponse,
    reader: jspb.BinaryReader
  ): PingResponse;
}

export namespace PingResponse {
  export type AsObject = {};
}

export class ListSubscribedChannelsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSubscribedChannelsRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ListSubscribedChannelsRequest
  ): ListSubscribedChannelsRequest.AsObject;
  static serializeBinaryToWriter(
    message: ListSubscribedChannelsRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ListSubscribedChannelsRequest;
  static deserializeBinaryFromReader(
    message: ListSubscribedChannelsRequest,
    reader: jspb.BinaryReader
  ): ListSubscribedChannelsRequest;
}

export namespace ListSubscribedChannelsRequest {
  export type AsObject = {};
}

export class ListSubscribedChannelsResponse extends jspb.Message {
  getChannelsList(): Array<Channel>;
  setChannelsList(value: Array<Channel>): ListSubscribedChannelsResponse;
  clearChannelsList(): ListSubscribedChannelsResponse;
  addChannels(value?: Channel, index?: number): Channel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSubscribedChannelsResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ListSubscribedChannelsResponse
  ): ListSubscribedChannelsResponse.AsObject;
  static serializeBinaryToWriter(
    message: ListSubscribedChannelsResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ListSubscribedChannelsResponse;
  static deserializeBinaryFromReader(
    message: ListSubscribedChannelsResponse,
    reader: jspb.BinaryReader
  ): ListSubscribedChannelsResponse;
}

export namespace ListSubscribedChannelsResponse {
  export type AsObject = {
    channelsList: Array<Channel.AsObject>;
  };
}

export class Channel extends jspb.Message {
  getId(): string;
  setId(value: string): Channel;

  getName(): string;
  setName(value: string): Channel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Channel.AsObject;
  static toObject(includeInstance: boolean, msg: Channel): Channel.AsObject;
  static serializeBinaryToWriter(
    message: Channel,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): Channel;
  static deserializeBinaryFromReader(
    message: Channel,
    reader: jspb.BinaryReader
  ): Channel;
}

export namespace Channel {
  export type AsObject = {
    id: string;
    name: string;
  };
}
