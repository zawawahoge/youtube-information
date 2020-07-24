import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { CommonServiceClient } from './proto/commonservice_grpc_web_pb';
import { ListSubscribedChannelsRequest, ListSubscribedChannelsResponse } from './proto/commonservice_pb';

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

    const commonService = new CommonServiceClient("http://localhost:8000");

    const req = new ListSubscribedChannelsRequest();
    const call = commonService.listSubscribedChannels(req, {}, (err, resp: ListSubscribedChannelsResponse) => {
      console.log(resp.getChannelsList());
    });

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
