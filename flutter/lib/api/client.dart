import 'package:grpc/grpc.dart';
import 'package:web/protobuf/commonservice.pb.dart';
import 'package:grpc/grpc_web.dart';
import '../protobuf/commonservice.pb.dart';
import '../protobuf/commonservice.pbgrpc.dart';
import 'package:http2/http2.dart';
import 'dart:io';
import 'package:stack_trace/stack_trace.dart';

const LIST_SUBSCRIBED_CHANNELS = "/v1/channels";
const PING = "/v1/ping";

class Client {
  GrpcWebClientChannel channel;
  ClientChannel c;
  CommonServiceClient commonServiceClient;

  Future<void> init() async {}

  Future<ListSubscribedChannelsResponse> runListSubscribedChannels() async {
    print("#### start runListSubscribedChannels");
    var uri = Uri.parse("http://localhost:8080");
    // var transport = new ClientTransportConnection.viaSocket(
    //   await SecureSocket.connect(
    //     uri.host,
    //     uri.port,
    //     supportedProtocols: ['h2'],
    //   ),
    // );
    // print("transport = $transport");
    channel = GrpcWebClientChannel.xhr(Uri.parse("http://localhost:8080"));
    // c = ClientChannel("localhost",
    //     port: 8080,
    //     options: ChannelOptions(credentials: ChannelCredentials.insecure()));
    // var con = await c.getConnection();
    // print("con $con");
    commonServiceClient = CommonServiceClient(
      channel,
      options: CallOptions(timeout: Duration(seconds: 3)),
    );
    final req = ListSubscribedChannelsRequest();
    print("############# runListSubscribedChannels");

    Chain.capture(() {
      commonServiceClient.listSubscribedChannels(req);
    });
    return commonServiceClient.listSubscribedChannels(req);
  }

  // void runAsync() {
  //   channel = GrpcWebClientChannel.xhr(Uri.parse("http://localhost:8080"));
  //   commonServiceClient = CommonServiceClient(
  //     channel,
  //     options: CallOptions(timeout: Duration(seconds: 3)),
  //   );
  //   final req = ListSubscribedChannelsRequest();
  //   print("############# runListSubscribedChannels");

  //   Chain.capture(() {
  //     print("capture");
  //     commonServiceClient.listSubscribedChannels(req).then((req) {
  //       print(req);
  //     }).catchError((e) {
  //       print(e);
  //     });
  //   });
  //   return;
  // }

  void scheduleAsync() {
    new Future.delayed(new Duration(seconds: 1)).then((_) => runAsync());
  }

  void runAsync() {
    throw 'oh no!';
  }
}
