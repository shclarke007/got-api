import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items:[],
      isLoaded:false,
    }
  }
  
  render() {
    return (
      <div className="App">
        <header><h1>Game of Thrones API</h1></header>

      </div>
    );
  }
}

export default App;
