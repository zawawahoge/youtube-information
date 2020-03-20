import 'dart:async';
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

import 'model.dart';

Future<ChannelList> listSubscribedChannel() async {
  final response = await http.get("http://localhost:8080/v1/channels");

  if (response.statusCode == 200) {
    return ChannelList.fromJson(json.decode(response.body));
  } else {
    throw Exception("failed to fetch subscribed channel");
  }
}

class Left extends StatefulWidget {
  Left({Key key}) : super(key: key);

  @override
  _LeftState createState() => _LeftState();
}

class _LeftState extends State<Left> {
  Future<ChannelList> futureChannelList;

  @override
  void initState() {
    super.initState();
    print("############## init state");
    futureChannelList = listSubscribedChannel();
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(18.0),
      child: FutureBuilder<ChannelList>(
        future: futureChannelList,
        builder: (context, snapshot) {
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
            return Text("error: ${snapshot.error}");
          }
          return CircularProgressIndicator();
        },
      ),
    );
  }
}
