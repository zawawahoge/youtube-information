import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

import {
  Book,
  CreateBookRequest,
  CreateShelfRequest,
  DeleteBookRequest,
  DeleteShelfRequest,
  GetBookRequest,
  GetShelfRequest,
  ListBooksRequest,
  ListBooksResponse,
  ListShelvesResponse,
  Shelf} from './bookstore_pb';

export class BookstoreClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  listShelves(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ListShelvesResponse) => void
  ): grpcWeb.ClientReadableStream<ListShelvesResponse>;

  createShelf(
    request: CreateShelfRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: Shelf) => void
  ): grpcWeb.ClientReadableStream<Shelf>;

  getShelf(
    request: GetShelfRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: Shelf) => void
  ): grpcWeb.ClientReadableStream<Shelf>;

  deleteShelf(
    request: DeleteShelfRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  listBooks(
    request: ListBooksRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ListBooksResponse) => void
  ): grpcWeb.ClientReadableStream<ListBooksResponse>;

  createBook(
    request: CreateBookRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: Book) => void
  ): grpcWeb.ClientReadableStream<Book>;

  getBook(
    request: GetBookRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: Book) => void
  ): grpcWeb.ClientReadableStream<Book>;

  deleteBook(
    request: DeleteBookRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

}

export class BookstorePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  listShelves(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<ListShelvesResponse>;

  createShelf(
    request: CreateShelfRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<Shelf>;

  getShelf(
    request: GetShelfRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<Shelf>;

  deleteShelf(
    request: DeleteShelfRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  listBooks(
    request: ListBooksRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ListBooksResponse>;

  createBook(
    request: CreateBookRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<Book>;

  getBook(
    request: GetBookRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<Book>;

  deleteBook(
    request: DeleteBookRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

}

