import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { ListSubscribedChannelsRequest, ListSubscribedChannelsResponse, Channel } from './proto/commonservice_pb';
import { CommonServiceClient } from './proto/commonservice_grpc_web_pb';

interface Props {
}
interface State {
  date: Date,
}

class Clock extends React.Component<Props, State> {
  timeID: any;

  constructor(props: Props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    console.log("componentDidMound");

    const commonService = new CommonServiceClient("http://localhost:8080");

    const req = new ListSubscribedChannelsRequest();
    const call = commonService.listSubscribedChannels(req, {}, (err, resp: ListSubscribedChannelsResponse) => {
      if (err) {
        console.log(err.code);
        console.log(err.message);
      } else {
        // console.log(resp.getChannelsList());
        var channels: Channel[];
        channels = resp.getChannelsList()
        channels.forEach(c => {
          console.log("ID", c.getId(), c.getId().length);
          console.log("Name", c.getName());
        });
      }
    });
    call.on("status", function(status) {
      console.log(status.code);
    })

  }
  
  componentDidUpdate() {
    console.log("componentDidUpdate" + this.state.date);
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Clock />
      <Clock />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
