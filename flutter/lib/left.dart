import 'dart:async';
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:grpc/grpc.dart';
import 'package:http/http.dart' as http;

import 'model.dart';
import 'protobuf/commonservice.pb.dart';
import 'protobuf/commonservice.pbgrpc.dart';

class Client {
  ClientChannel channel;
  CommonServiceClient commonServiceClient;

  Future<void> init() async {}

  Future<ListSubscribedChannelsResponse> runListSubscribedChannels() async {
    channel = ClientChannel('127.0.0.1',
        port: 8080,
        options: const ChannelOptions(
          credentials: ChannelCredentials.insecure(),
        ));

    commonServiceClient = CommonServiceClient(
      channel,
      options: CallOptions(timeout: Duration(seconds: 3)),
    );
    final req = ListSubscribedChannelsRequest();
    print("############# runListSubscribedChannels");

    return commonServiceClient.listSubscribedChannels(req);
  }
}

class Left extends StatefulWidget {
  Left({Key key}) : super(key: key);

  @override
  _LeftState createState() => _LeftState();
}

class _LeftState extends State<Left> {
  Future<ListSubscribedChannelsResponse> res;

  @override
  void initState() {
    super.initState();
    final client = Client();
    // client.init();
    res = client.runListSubscribedChannels();
    print("############## init state");
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(18.0),
      child: FutureBuilder<ListSubscribedChannelsResponse>(
        future: res,
        builder: (context, snapshot) {
          print("############### has data ${snapshot.hasData}");
          if (snapshot.hasData) {
            print("############### has data");
            return GridView.count(
              crossAxisCount: 1,
              childAspectRatio: 5,
              children: snapshot.data.channels.map((channel) {
                return Center(
                  child: Text(
                    "Channel ${channel.name}",
                    textScaleFactor: 2,
                  ),
                );
              }).toList(),
            );
          } else if (snapshot.hasError) {
            print("########### $snapshot");
            return Text("error: ${snapshot.error}");
          }
          return CircularProgressIndicator();
        },
      ),
    );
  }
}
