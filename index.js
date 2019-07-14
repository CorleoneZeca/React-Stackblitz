import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import classes from'./style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Tania'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p className= {classes.teste}>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
