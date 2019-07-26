import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import {Simple} from './examples/simple.jsx'

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
        <h1>Reto Example</h1>
        <p>
          Start editing to see some magic happen :)12
        </p>
        <Simple/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
