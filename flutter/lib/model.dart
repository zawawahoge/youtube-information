class Channel {
  final String id;
  final String name;

  Channel({this.id, this.name});

  factory Channel.fromJson(Map<String, dynamic> json) {
    return Channel(
      id: json["id"],
      name: json["name"],
    );
  }
}

class ChannelList {
  final List<Channel> channels;

  ChannelList({this.channels});

  factory ChannelList.fromJson(Map<String, dynamic> json) {
    var list = json["channels"] as List;
    print(list);
    return ChannelList(
      channels: list.map((c) => Channel.fromJson(c)).toList(),
    );
  }
}
