import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

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
    this.timeID = setInterval(
      () => this.tick(),
      1000,
    );
    console.log(this.timeID);
  }
  
  componentDidUpdate() {
    console.log("componentDidUpdate" + this.state.date);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  clickedEventHandler = () => {
    alert("clicked " + this.state.date);
  }
  
  render() {
    console.log("render");
    return (
      <div>
        <h1>Hello</h1>
        <h2>It is {this.state.date.toUTCString()}</h2>
        <button onClick={this.clickedEventHandler}>Click me</button>
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
