import React, { useState } from "react";
import ChannelList from "../ChannelList/ChannelList";
import { Channel, ListSubscribedChannelsRequest } from '../../proto/commonservice_pb';
import { CommonServiceClient } from '../../proto/commonservice_grpc_web_pb';

export default function Main() {
  const [channels, setChannels] = useState(new Array(0));

  function getListChannelList() {
    var req = new ListSubscribedChannelsRequest();
    var client = new CommonServiceClient(process.env.REACT_APP_API_URL ?? "");
    var md = {"authorization": localStorage.getItem("token") ?? ""};
    client.listSubscribedChannels(req, md, (e, res) => {
      console.log(e);
      console.log(res);
      setChannels(res.getChannelsList());
      console.log(channels);
      
    });
  }

  return (
    <div>
      <h1>Main</h1>
      <button onClick={()=> getListChannelList()}>りすと</button>
      <ChannelList channels={channels}></ChannelList>
    </div>
  );
}
