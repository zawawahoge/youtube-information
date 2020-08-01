import React, {useEffect, useState} from 'react';
import './App.css';
import { ListSubscribedChannelsRequest, ListSubscribedChannelsResponse, Channel } from './proto/commonservice_pb';
import { CommonServiceClient } from './proto/commonservice_grpc_web_pb';
import { BookstoreClient } from './proto/bookstore_grpc_web_pb';
import { ListBooksRequest, ListBooksResponse } from './proto/bookstore_pb';
import ChannelList from './ChannelList';

function App() {
  const [channels, setChannels] = useState<Channel[]>([]);

  useEffect(() => {
    // const bookstoreService = new BookstoreClient("http://35.189.136.0")
    // bookstoreService.listBooks(new ListBooksRequest(), {}, (err, resp: ListBooksResponse) => {
    //   if (err) {
    //     console.log(err.code);
    //     console.log(err.message);
    //   } else {
    //     console.log(resp.getBooksList())
    //     resp.getBooksList().forEach(b => {
    //       console.log(b);
    //     });
    //   }
    // })

    const commonService = new CommonServiceClient("https://helical-disk-284416.uc.r.appspot.com");

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
  }, []);
  return (
    <div className="App">
      <ChannelList channels={channels}></ChannelList>
    </div>
  );
}

export default App;
