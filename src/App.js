import React, {Component} from 'react';

import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      parText: ''
    }

  }

  setParText = event => {
    console.log(event.target.value);
    this.setState({parText: event.target.value});
  }

  render() {
    return (
      <div className="App">
          <p>{this.state.parText}</p>
        <textarea cols="30" rows="10" onChange={this.setParText}></textarea>
      </div>
    );
  }
}

export default App;
