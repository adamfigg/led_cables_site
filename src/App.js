import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to marching ants cables</h2>
        </div>
        <p className="App-intro">
          To get started, buy some stuff now! Why not, your phone could really use it.
        </p>
        <p>This will be a project to keep up with React and Redux and hopefully make it into a real site to make some $$$ </p>
      </div>
    );
  }
}

export default App;
