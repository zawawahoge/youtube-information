///
//  Generated code. Do not modify.
//  source: commonservice.proto
//
// @dart = 2.3
// ignore_for_file: camel_case_types,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

class ListSubscribedChannelsRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('ListSubscribedChannelsRequest', package: const $pb.PackageName('apiservice'), createEmptyInstance: create)
    ..hasRequiredFields = false
  ;

  ListSubscribedChannelsRequest._() : super();
  factory ListSubscribedChannelsRequest() => create();
  factory ListSubscribedChannelsRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ListSubscribedChannelsRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  ListSubscribedChannelsRequest clone() => ListSubscribedChannelsRequest()..mergeFromMessage(this);
  ListSubscribedChannelsRequest copyWith(void Function(ListSubscribedChannelsRequest) updates) => super.copyWith((message) => updates(message as ListSubscribedChannelsRequest));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ListSubscribedChannelsRequest create() => ListSubscribedChannelsRequest._();
  ListSubscribedChannelsRequest createEmptyInstance() => create();
  static $pb.PbList<ListSubscribedChannelsRequest> createRepeated() => $pb.PbList<ListSubscribedChannelsRequest>();
  @$core.pragma('dart2js:noInline')
  static ListSubscribedChannelsRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ListSubscribedChannelsRequest>(create);
  static ListSubscribedChannelsRequest _defaultInstance;
}

class ListSubscribedChannelsResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('ListSubscribedChannelsResponse', package: const $pb.PackageName('apiservice'), createEmptyInstance: create)
    ..pc<Channel>(1, 'channels', $pb.PbFieldType.PM, subBuilder: Channel.create)
    ..hasRequiredFields = false
  ;

  ListSubscribedChannelsResponse._() : super();
  factory ListSubscribedChannelsResponse() => create();
  factory ListSubscribedChannelsResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ListSubscribedChannelsResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  ListSubscribedChannelsResponse clone() => ListSubscribedChannelsResponse()..mergeFromMessage(this);
  ListSubscribedChannelsResponse copyWith(void Function(ListSubscribedChannelsResponse) updates) => super.copyWith((message) => updates(message as ListSubscribedChannelsResponse));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ListSubscribedChannelsResponse create() => ListSubscribedChannelsResponse._();
  ListSubscribedChannelsResponse createEmptyInstance() => create();
  static $pb.PbList<ListSubscribedChannelsResponse> createRepeated() => $pb.PbList<ListSubscribedChannelsResponse>();
  @$core.pragma('dart2js:noInline')
  static ListSubscribedChannelsResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ListSubscribedChannelsResponse>(create);
  static ListSubscribedChannelsResponse _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<Channel> get channels => $_getList(0);
}

class Channel extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Channel', package: const $pb.PackageName('apiservice'), createEmptyInstance: create)
    ..aOS(1, 'id')
    ..aOS(2, 'name')
    ..hasRequiredFields = false
  ;

  Channel._() : super();
  factory Channel() => create();
  factory Channel.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Channel.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Channel clone() => Channel()..mergeFromMessage(this);
  Channel copyWith(void Function(Channel) updates) => super.copyWith((message) => updates(message as Channel));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Channel create() => Channel._();
  Channel createEmptyInstance() => create();
  static $pb.PbList<Channel> createRepeated() => $pb.PbList<Channel>();
  @$core.pragma('dart2js:noInline')
  static Channel getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Channel>(create);
  static Channel _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get id => $_getSZ(0);
  @$pb.TagNumber(1)
  set id($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get name => $_getSZ(1);
  @$pb.TagNumber(2)
  set name($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasName() => $_has(1);
  @$pb.TagNumber(2)
  void clearName() => clearField(2);
}

