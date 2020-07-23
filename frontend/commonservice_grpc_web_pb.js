/**
 * @fileoverview gRPC-Web generated client stub for apiservice
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('./google/api/annotations_pb.js')
const proto = {};
proto.apiservice = require('./commonservice_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.apiservice.CommonServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.apiservice.CommonServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.apiservice.ListSubscribedChannelsRequest,
 *   !proto.apiservice.ListSubscribedChannelsResponse>}
 */
const methodDescriptor_CommonService_ListSubscribedChannels = new grpc.web.MethodDescriptor(
  '/apiservice.CommonService/ListSubscribedChannels',
  grpc.web.MethodType.UNARY,
  proto.apiservice.ListSubscribedChannelsRequest,
  proto.apiservice.ListSubscribedChannelsResponse,
  /**
   * @param {!proto.apiservice.ListSubscribedChannelsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.apiservice.ListSubscribedChannelsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.apiservice.ListSubscribedChannelsRequest,
 *   !proto.apiservice.ListSubscribedChannelsResponse>}
 */
const methodInfo_CommonService_ListSubscribedChannels = new grpc.web.AbstractClientBase.MethodInfo(
  proto.apiservice.ListSubscribedChannelsResponse,
  /**
   * @param {!proto.apiservice.ListSubscribedChannelsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.apiservice.ListSubscribedChannelsResponse.deserializeBinary
);


/**
 * @param {!proto.apiservice.ListSubscribedChannelsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.apiservice.ListSubscribedChannelsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.apiservice.ListSubscribedChannelsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.apiservice.CommonServiceClient.prototype.listSubscribedChannels =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/apiservice.CommonService/ListSubscribedChannels',
      request,
      metadata || {},
      methodDescriptor_CommonService_ListSubscribedChannels,
      callback);
};


/**
 * @param {!proto.apiservice.ListSubscribedChannelsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.apiservice.ListSubscribedChannelsResponse>}
 *     A native promise that resolves to the response
 */
proto.apiservice.CommonServicePromiseClient.prototype.listSubscribedChannels =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/apiservice.CommonService/ListSubscribedChannels',
      request,
      metadata || {},
      methodDescriptor_CommonService_ListSubscribedChannels);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.apiservice.PingRequest,
 *   !proto.apiservice.PingResponse>}
 */
const methodDescriptor_CommonService_Ping = new grpc.web.MethodDescriptor(
  '/apiservice.CommonService/Ping',
  grpc.web.MethodType.UNARY,
  proto.apiservice.PingRequest,
  proto.apiservice.PingResponse,
  /**
   * @param {!proto.apiservice.PingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.apiservice.PingResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.apiservice.PingRequest,
 *   !proto.apiservice.PingResponse>}
 */
const methodInfo_CommonService_Ping = new grpc.web.AbstractClientBase.MethodInfo(
  proto.apiservice.PingResponse,
  /**
   * @param {!proto.apiservice.PingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.apiservice.PingResponse.deserializeBinary
);


/**
 * @param {!proto.apiservice.PingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.apiservice.PingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.apiservice.PingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.apiservice.CommonServiceClient.prototype.ping =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/apiservice.CommonService/Ping',
      request,
      metadata || {},
      methodDescriptor_CommonService_Ping,
      callback);
};


/**
 * @param {!proto.apiservice.PingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.apiservice.PingResponse>}
 *     A native promise that resolves to the response
 */
proto.apiservice.CommonServicePromiseClient.prototype.ping =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/apiservice.CommonService/Ping',
      request,
      metadata || {},
      methodDescriptor_CommonService_Ping);
};


module.exports = proto.apiservice;

