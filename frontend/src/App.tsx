import React, {useEffect, useState} from 'react';
import './App.css';
import { ListSubscribedChannelsRequest, ListSubscribedChannelsResponse, Channel } from './proto/commonservice_pb';
import { CommonServiceClient } from './proto/commonservice_grpc_web_pb';
import ChannelList from './ChannelList';

function App() {
  const [channels, setChannels] = useState<Channel[]>([]);

  useEffect(() => {

    const commonService = new CommonServiceClient("http://localhost:8080");

    const req = new ListSubscribedChannelsRequest();
    const call = commonService.listSubscribedChannels(req, {}, (err, resp: ListSubscribedChannelsResponse) => {
      if (err) {
        console.log(err.code);
        console.log(err.message);
      } else {
        var channels = resp.getChannelsList()
        channels.forEach(c => {
          console.log("ID", c.getId(), c.getId().length);
          console.log("Name", c.getName());
        });
        setChannels(channels);
      }
    });
    call.on("status", function(status) {
      console.log(status.code);
    })
  });
  return (
    <div className="App">
      <ChannelList channels={channels}></ChannelList>
    </div>
  );
}

export default App;
