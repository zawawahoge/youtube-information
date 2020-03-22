///
//  Generated code. Do not modify.
//  source: commonservice.proto
//
// @dart = 2.3
// ignore_for_file: camel_case_types,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type

import 'dart:async' as $async;

import 'dart:core' as $core;

import 'package:grpc/service_api.dart' as $grpc;
import 'commonservice.pb.dart' as $0;
export 'commonservice.pb.dart';

class CommonServiceClient extends $grpc.Client {
  static final _$listSubscribedChannels = $grpc.ClientMethod<
          $0.ListSubscribedChannelsRequest, $0.ListSubscribedChannelsResponse>(
      '/apiservice.CommonService/ListSubscribedChannels',
      ($0.ListSubscribedChannelsRequest value) => value.writeToBuffer(),
      ($core.List<$core.int> value) =>
          $0.ListSubscribedChannelsResponse.fromBuffer(value));
  static final _$ping = $grpc.ClientMethod<$0.PingRequest, $0.PingResponse>(
      '/apiservice.CommonService/Ping',
      ($0.PingRequest value) => value.writeToBuffer(),
      ($core.List<$core.int> value) => $0.PingResponse.fromBuffer(value));

  CommonServiceClient($grpc.ClientChannel channel, {$grpc.CallOptions options})
      : super(channel, options: options);

  $grpc.ResponseFuture<$0.ListSubscribedChannelsResponse>
      listSubscribedChannels($0.ListSubscribedChannelsRequest request,
          {$grpc.CallOptions options}) {
    final call = $createCall(
        _$listSubscribedChannels, $async.Stream.fromIterable([request]),
        options: options);
    return $grpc.ResponseFuture(call);
  }

  $grpc.ResponseFuture<$0.PingResponse> ping($0.PingRequest request,
      {$grpc.CallOptions options}) {
    final call = $createCall(_$ping, $async.Stream.fromIterable([request]),
        options: options);
    return $grpc.ResponseFuture(call);
  }
}

abstract class CommonServiceBase extends $grpc.Service {
  $core.String get $name => 'apiservice.CommonService';

  CommonServiceBase() {
    $addMethod($grpc.ServiceMethod<$0.ListSubscribedChannelsRequest,
            $0.ListSubscribedChannelsResponse>(
        'ListSubscribedChannels',
        listSubscribedChannels_Pre,
        false,
        false,
        ($core.List<$core.int> value) =>
            $0.ListSubscribedChannelsRequest.fromBuffer(value),
        ($0.ListSubscribedChannelsResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.PingRequest, $0.PingResponse>(
        'Ping',
        ping_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.PingRequest.fromBuffer(value),
        ($0.PingResponse value) => value.writeToBuffer()));
  }

  $async.Future<$0.ListSubscribedChannelsResponse> listSubscribedChannels_Pre(
      $grpc.ServiceCall call,
      $async.Future<$0.ListSubscribedChannelsRequest> request) async {
    return listSubscribedChannels(call, await request);
  }

  $async.Future<$0.PingResponse> ping_Pre(
      $grpc.ServiceCall call, $async.Future<$0.PingRequest> request) async {
    return ping(call, await request);
  }

  $async.Future<$0.ListSubscribedChannelsResponse> listSubscribedChannels(
      $grpc.ServiceCall call, $0.ListSubscribedChannelsRequest request);
  $async.Future<$0.PingResponse> ping(
      $grpc.ServiceCall call, $0.PingRequest request);
}
