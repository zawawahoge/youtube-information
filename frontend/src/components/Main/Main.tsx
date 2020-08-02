import React from "react";
import ChannelList from "../ChannelList/ChannelList";
import { Channel } from "../../proto/commonservice_pb";

export default function Main() {
  var channels: Channel[] = new Array(0);
  return (
    <div>
      <h1>Main</h1>
      <ChannelList channels={channels}></ChannelList>
    </div>
  );
}
