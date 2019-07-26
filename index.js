import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import {Simple} from './examples/simple.jsx'
import {WithArgs} from './examples/with-args.jsx'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <h1>Reto Demo</h1>
        <hr/>
        <h2>Simple</h2>
        <Simple/>
        <hr/>
        <h2>With Args</h2>
        <WithArgs/>
        <hr/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
