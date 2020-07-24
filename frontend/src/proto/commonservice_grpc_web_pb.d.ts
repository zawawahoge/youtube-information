import * as grpcWeb from 'grpc-web';

import {
  ListSubscribedChannelsRequest,
  ListSubscribedChannelsResponse,
  PingRequest,
  PingResponse} from './commonservice_pb';

export class CommonServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  listSubscribedChannels(
    request: ListSubscribedChannelsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ListSubscribedChannelsResponse) => void
  ): grpcWeb.ClientReadableStream<ListSubscribedChannelsResponse>;

  ping(
    request: PingRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: PingResponse) => void
  ): grpcWeb.ClientReadableStream<PingResponse>;

}

export class CommonServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  listSubscribedChannels(
    request: ListSubscribedChannelsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ListSubscribedChannelsResponse>;

  ping(
    request: PingRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<PingResponse>;

}

