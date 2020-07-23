import 'dart:async';
import 'package:flutter/material.dart';

import 'protobuf/commonservice.pb.dart';
import 'protobuf/commonservice.pbgrpc.dart';
import 'api/client.dart';
import 'package:stack_trace/stack_trace.dart';

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
    Chain.capture(() {
      client.runListSubscribedChannels();
    }, onError: (error, stackChain) {
      print("Caught error $error\n"
          "$stackChain");
    });
    print("############## init state");
  }

  @override
  Widget build(BuildContext context) {
    return Text("hoge");
    // return Padding(
    //   padding: const EdgeInsets.all(18.0),
    //   child: FutureBuilder<ListSubscribedChannelsResponse>(
    //     future: res,
    //     builder: (context, snapshot) {
    //       print("############### has data ${snapshot.hasData}");
    //       if (snapshot.hasData) {
    //         print("############### has data");
    //         return GridView.count(
    //           crossAxisCount: 1,
    //           childAspectRatio: 5,
    //           children: snapshot.data.channels.map((channel) {
    //             return Center(
    //               child: Text(
    //                 "Channel ${channel.name}",
    //                 textScaleFactor: 2,
    //               ),
    //             );
    //           }).toList(),
    //         );
    //       } else if (snapshot.hasError) {
    //         print("########### $snapshot");
    //         return Text("error: ${snapshot.error}");
    //       }
    //       return CircularProgressIndicator();
    //     },
    //   ),
    // );
  }
}
