import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import {Simple} from './examples/simple'
import {WithArgs} from './examples/with-args'
import {MultiLevel} from './examples/multi-level'
import {Dependence} from './examples/dependence'

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
        <h2>Multi Level</h2>
        <MultiLevel/>
        <hr/>
        <h2>Dependence</h2>
        <Dependence/>
        <hr/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
