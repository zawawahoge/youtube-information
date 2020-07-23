/**
 * @fileoverview gRPC-Web generated client stub for apiservice
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import {
  ListSubscribedChannelsRequest,
  ListSubscribedChannelsResponse,
  PingRequest,
  PingResponse} from './commonservice_pb';

export class CommonServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoListSubscribedChannels = new grpcWeb.AbstractClientBase.MethodInfo(
    ListSubscribedChannelsResponse,
    (request: ListSubscribedChannelsRequest) => {
      return request.serializeBinary();
    },
    ListSubscribedChannelsResponse.deserializeBinary
  );

  listSubscribedChannels(
    request: ListSubscribedChannelsRequest,
    metadata: grpcWeb.Metadata | null): Promise<ListSubscribedChannelsResponse>;

  listSubscribedChannels(
    request: ListSubscribedChannelsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListSubscribedChannelsResponse) => void): grpcWeb.ClientReadableStream<ListSubscribedChannelsResponse>;

  listSubscribedChannels(
    request: ListSubscribedChannelsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ListSubscribedChannelsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/apiservice.CommonService/ListSubscribedChannels', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoListSubscribedChannels,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/apiservice.CommonService/ListSubscribedChannels',
    request,
    metadata || {},
    this.methodInfoListSubscribedChannels);
  }

  methodInfoPing = new grpcWeb.AbstractClientBase.MethodInfo(
    PingResponse,
    (request: PingRequest) => {
      return request.serializeBinary();
    },
    PingResponse.deserializeBinary
  );

  ping(
    request: PingRequest,
    metadata: grpcWeb.Metadata | null): Promise<PingResponse>;

  ping(
    request: PingRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: PingResponse) => void): grpcWeb.ClientReadableStream<PingResponse>;

  ping(
    request: PingRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: PingResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/apiservice.CommonService/Ping', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoPing,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/apiservice.CommonService/Ping',
    request,
    metadata || {},
    this.methodInfoPing);
  }

}

