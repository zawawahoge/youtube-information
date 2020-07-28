/**
 * @fileoverview gRPC-Web generated client stub for endpoints.examples.bookstore
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.endpoints = {};
proto.endpoints.examples = {};
proto.endpoints.examples.bookstore = require('./bookstore_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.endpoints.examples.bookstore.BookstoreClient =
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
proto.endpoints.examples.bookstore.BookstorePromiseClient =
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
 *   !proto.google.protobuf.Empty,
 *   !proto.endpoints.examples.bookstore.ListShelvesResponse>}
 */
const methodDescriptor_Bookstore_ListShelves = new grpc.web.MethodDescriptor(
  '/endpoints.examples.bookstore.Bookstore/ListShelves',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.endpoints.examples.bookstore.ListShelvesResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.endpoints.examples.bookstore.ListShelvesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.endpoints.examples.bookstore.ListShelvesResponse>}
 */
const methodInfo_Bookstore_ListShelves = new grpc.web.AbstractClientBase.MethodInfo(
  proto.endpoints.examples.bookstore.ListShelvesResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.endpoints.examples.bookstore.ListShelvesResponse.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.endpoints.examples.bookstore.ListShelvesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.endpoints.examples.bookstore.ListShelvesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.endpoints.examples.bookstore.BookstoreClient.prototype.listShelves =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/endpoints.examples.bookstore.Bookstore/ListShelves',
      request,
      metadata || {},
      methodDescriptor_Bookstore_ListShelves,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.endpoints.examples.bookstore.ListShelvesResponse>}
 *     A native promise that resolves to the response
 */
proto.endpoints.examples.bookstore.BookstorePromiseClient.prototype.listShelves =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/endpoints.examples.bookstore.Bookstore/ListShelves',
      request,
      metadata || {},
      methodDescriptor_Bookstore_ListShelves);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.endpoints.examples.bookstore.CreateShelfRequest,
 *   !proto.endpoints.examples.bookstore.Shelf>}
 */
const methodDescriptor_Bookstore_CreateShelf = new grpc.web.MethodDescriptor(
  '/endpoints.examples.bookstore.Bookstore/CreateShelf',
  grpc.web.MethodType.UNARY,
  proto.endpoints.examples.bookstore.CreateShelfRequest,
  proto.endpoints.examples.bookstore.Shelf,
  /**
   * @param {!proto.endpoints.examples.bookstore.CreateShelfRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.endpoints.examples.bookstore.Shelf.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.endpoints.examples.bookstore.CreateShelfRequest,
 *   !proto.endpoints.examples.bookstore.Shelf>}
 */
const methodInfo_Bookstore_CreateShelf = new grpc.web.AbstractClientBase.MethodInfo(
  proto.endpoints.examples.bookstore.Shelf,
  /**
   * @param {!proto.endpoints.examples.bookstore.CreateShelfRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.endpoints.examples.bookstore.Shelf.deserializeBinary
);


/**
 * @param {!proto.endpoints.examples.bookstore.CreateShelfRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.endpoints.examples.bookstore.Shelf)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.endpoints.examples.bookstore.Shelf>|undefined}
 *     The XHR Node Readable Stream
 */
proto.endpoints.examples.bookstore.BookstoreClient.prototype.createShelf =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/endpoints.examples.bookstore.Bookstore/CreateShelf',
      request,
      metadata || {},
      methodDescriptor_Bookstore_CreateShelf,
      callback);
};


/**
 * @param {!proto.endpoints.examples.bookstore.CreateShelfRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.endpoints.examples.bookstore.Shelf>}
 *     A native promise that resolves to the response
 */
proto.endpoints.examples.bookstore.BookstorePromiseClient.prototype.createShelf =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/endpoints.examples.bookstore.Bookstore/CreateShelf',
      request,
      metadata || {},
      methodDescriptor_Bookstore_CreateShelf);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.endpoints.examples.bookstore.GetShelfRequest,
 *   !proto.endpoints.examples.bookstore.Shelf>}
 */
const methodDescriptor_Bookstore_GetShelf = new grpc.web.MethodDescriptor(
  '/endpoints.examples.bookstore.Bookstore/GetShelf',
  grpc.web.MethodType.UNARY,
  proto.endpoints.examples.bookstore.GetShelfRequest,
  proto.endpoints.examples.bookstore.Shelf,
  /**
   * @param {!proto.endpoints.examples.bookstore.GetShelfRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.endpoints.examples.bookstore.Shelf.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.endpoints.examples.bookstore.GetShelfRequest,
 *   !proto.endpoints.examples.bookstore.Shelf>}
 */
const methodInfo_Bookstore_GetShelf = new grpc.web.AbstractClientBase.MethodInfo(
  proto.endpoints.examples.bookstore.Shelf,
  /**
   * @param {!proto.endpoints.examples.bookstore.GetShelfRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.endpoints.examples.bookstore.Shelf.deserializeBinary
);


/**
 * @param {!proto.endpoints.examples.bookstore.GetShelfRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.endpoints.examples.bookstore.Shelf)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.endpoints.examples.bookstore.Shelf>|undefined}
 *     The XHR Node Readable Stream
 */
proto.endpoints.examples.bookstore.BookstoreClient.prototype.getShelf =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/endpoints.examples.bookstore.Bookstore/GetShelf',
      request,
      metadata || {},
      methodDescriptor_Bookstore_GetShelf,
      callback);
};


/**
 * @param {!proto.endpoints.examples.bookstore.GetShelfRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.endpoints.examples.bookstore.Shelf>}
 *     A native promise that resolves to the response
 */
proto.endpoints.examples.bookstore.BookstorePromiseClient.prototype.getShelf =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/endpoints.examples.bookstore.Bookstore/GetShelf',
      request,
      metadata || {},
      methodDescriptor_Bookstore_GetShelf);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.endpoints.examples.bookstore.DeleteShelfRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Bookstore_DeleteShelf = new grpc.web.MethodDescriptor(
  '/endpoints.examples.bookstore.Bookstore/DeleteShelf',
  grpc.web.MethodType.UNARY,
  proto.endpoints.examples.bookstore.DeleteShelfRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.endpoints.examples.bookstore.DeleteShelfRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.endpoints.examples.bookstore.DeleteShelfRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Bookstore_DeleteShelf = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.endpoints.examples.bookstore.DeleteShelfRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.endpoints.examples.bookstore.DeleteShelfRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.endpoints.examples.bookstore.BookstoreClient.prototype.deleteShelf =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/endpoints.examples.bookstore.Bookstore/DeleteShelf',
      request,
      metadata || {},
      methodDescriptor_Bookstore_DeleteShelf,
      callback);
};


/**
 * @param {!proto.endpoints.examples.bookstore.DeleteShelfRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.endpoints.examples.bookstore.BookstorePromiseClient.prototype.deleteShelf =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/endpoints.examples.bookstore.Bookstore/DeleteShelf',
      request,
      metadata || {},
      methodDescriptor_Bookstore_DeleteShelf);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.endpoints.examples.bookstore.ListBooksRequest,
 *   !proto.endpoints.examples.bookstore.ListBooksResponse>}
 */
const methodDescriptor_Bookstore_ListBooks = new grpc.web.MethodDescriptor(
  '/endpoints.examples.bookstore.Bookstore/ListBooks',
  grpc.web.MethodType.UNARY,
  proto.endpoints.examples.bookstore.ListBooksRequest,
  proto.endpoints.examples.bookstore.ListBooksResponse,
  /**
   * @param {!proto.endpoints.examples.bookstore.ListBooksRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.endpoints.examples.bookstore.ListBooksResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.endpoints.examples.bookstore.ListBooksRequest,
 *   !proto.endpoints.examples.bookstore.ListBooksResponse>}
 */
const methodInfo_Bookstore_ListBooks = new grpc.web.AbstractClientBase.MethodInfo(
  proto.endpoints.examples.bookstore.ListBooksResponse,
  /**
   * @param {!proto.endpoints.examples.bookstore.ListBooksRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.endpoints.examples.bookstore.ListBooksResponse.deserializeBinary
);


/**
 * @param {!proto.endpoints.examples.bookstore.ListBooksRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.endpoints.examples.bookstore.ListBooksResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.endpoints.examples.bookstore.ListBooksResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.endpoints.examples.bookstore.BookstoreClient.prototype.listBooks =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/endpoints.examples.bookstore.Bookstore/ListBooks',
      request,
      metadata || {},
      methodDescriptor_Bookstore_ListBooks,
      callback);
};


/**
 * @param {!proto.endpoints.examples.bookstore.ListBooksRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.endpoints.examples.bookstore.ListBooksResponse>}
 *     A native promise that resolves to the response
 */
proto.endpoints.examples.bookstore.BookstorePromiseClient.prototype.listBooks =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/endpoints.examples.bookstore.Bookstore/ListBooks',
      request,
      metadata || {},
      methodDescriptor_Bookstore_ListBooks);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.endpoints.examples.bookstore.CreateBookRequest,
 *   !proto.endpoints.examples.bookstore.Book>}
 */
const methodDescriptor_Bookstore_CreateBook = new grpc.web.MethodDescriptor(
  '/endpoints.examples.bookstore.Bookstore/CreateBook',
  grpc.web.MethodType.UNARY,
  proto.endpoints.examples.bookstore.CreateBookRequest,
  proto.endpoints.examples.bookstore.Book,
  /**
   * @param {!proto.endpoints.examples.bookstore.CreateBookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.endpoints.examples.bookstore.Book.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.endpoints.examples.bookstore.CreateBookRequest,
 *   !proto.endpoints.examples.bookstore.Book>}
 */
const methodInfo_Bookstore_CreateBook = new grpc.web.AbstractClientBase.MethodInfo(
  proto.endpoints.examples.bookstore.Book,
  /**
   * @param {!proto.endpoints.examples.bookstore.CreateBookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.endpoints.examples.bookstore.Book.deserializeBinary
);


/**
 * @param {!proto.endpoints.examples.bookstore.CreateBookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.endpoints.examples.bookstore.Book)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.endpoints.examples.bookstore.Book>|undefined}
 *     The XHR Node Readable Stream
 */
proto.endpoints.examples.bookstore.BookstoreClient.prototype.createBook =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/endpoints.examples.bookstore.Bookstore/CreateBook',
      request,
      metadata || {},
      methodDescriptor_Bookstore_CreateBook,
      callback);
};


/**
 * @param {!proto.endpoints.examples.bookstore.CreateBookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.endpoints.examples.bookstore.Book>}
 *     A native promise that resolves to the response
 */
proto.endpoints.examples.bookstore.BookstorePromiseClient.prototype.createBook =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/endpoints.examples.bookstore.Bookstore/CreateBook',
      request,
      metadata || {},
      methodDescriptor_Bookstore_CreateBook);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.endpoints.examples.bookstore.GetBookRequest,
 *   !proto.endpoints.examples.bookstore.Book>}
 */
const methodDescriptor_Bookstore_GetBook = new grpc.web.MethodDescriptor(
  '/endpoints.examples.bookstore.Bookstore/GetBook',
  grpc.web.MethodType.UNARY,
  proto.endpoints.examples.bookstore.GetBookRequest,
  proto.endpoints.examples.bookstore.Book,
  /**
   * @param {!proto.endpoints.examples.bookstore.GetBookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.endpoints.examples.bookstore.Book.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.endpoints.examples.bookstore.GetBookRequest,
 *   !proto.endpoints.examples.bookstore.Book>}
 */
const methodInfo_Bookstore_GetBook = new grpc.web.AbstractClientBase.MethodInfo(
  proto.endpoints.examples.bookstore.Book,
  /**
   * @param {!proto.endpoints.examples.bookstore.GetBookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.endpoints.examples.bookstore.Book.deserializeBinary
);


/**
 * @param {!proto.endpoints.examples.bookstore.GetBookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.endpoints.examples.bookstore.Book)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.endpoints.examples.bookstore.Book>|undefined}
 *     The XHR Node Readable Stream
 */
proto.endpoints.examples.bookstore.BookstoreClient.prototype.getBook =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/endpoints.examples.bookstore.Bookstore/GetBook',
      request,
      metadata || {},
      methodDescriptor_Bookstore_GetBook,
      callback);
};


/**
 * @param {!proto.endpoints.examples.bookstore.GetBookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.endpoints.examples.bookstore.Book>}
 *     A native promise that resolves to the response
 */
proto.endpoints.examples.bookstore.BookstorePromiseClient.prototype.getBook =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/endpoints.examples.bookstore.Bookstore/GetBook',
      request,
      metadata || {},
      methodDescriptor_Bookstore_GetBook);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.endpoints.examples.bookstore.DeleteBookRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Bookstore_DeleteBook = new grpc.web.MethodDescriptor(
  '/endpoints.examples.bookstore.Bookstore/DeleteBook',
  grpc.web.MethodType.UNARY,
  proto.endpoints.examples.bookstore.DeleteBookRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.endpoints.examples.bookstore.DeleteBookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.endpoints.examples.bookstore.DeleteBookRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Bookstore_DeleteBook = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.endpoints.examples.bookstore.DeleteBookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.endpoints.examples.bookstore.DeleteBookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.endpoints.examples.bookstore.BookstoreClient.prototype.deleteBook =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/endpoints.examples.bookstore.Bookstore/DeleteBook',
      request,
      metadata || {},
      methodDescriptor_Bookstore_DeleteBook,
      callback);
};


/**
 * @param {!proto.endpoints.examples.bookstore.DeleteBookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.endpoints.examples.bookstore.BookstorePromiseClient.prototype.deleteBook =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/endpoints.examples.bookstore.Bookstore/DeleteBook',
      request,
      metadata || {},
      methodDescriptor_Bookstore_DeleteBook);
};


module.exports = proto.endpoints.examples.bookstore;

