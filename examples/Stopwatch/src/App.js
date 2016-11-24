import React from 'react';
import { connectModule } from '../../../src';
import './App.css';
import module from './module';

const { start, stop } = module.actions;

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    debugger;
    this.interval = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.props.running && this.props.actions.tick();
  }

  render() {
    const { time, actions } = this.props;
    return (
      <div className="App">
        <div> {time} </div>
        <div>
          <button onClick={() => { debugger; actions.start(); }}>Start</button>
          <button onClick={actions.stop}>Stop</button>
          <button onClick={actions.reset}>Reset</button>
        </div>
      </div>
    );
  }
}

export const Component = Stopwatch;
export default connectModule(module)(Stopwatch);