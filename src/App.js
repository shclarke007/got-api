import React, { Component } from "react";
import Characters from "./Characters";
import Books from "./Books";
import Houses from "./Houses";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Books />
        </div>
        <div>
          <Houses />
        </div>
        <div>
          <Characters />
        </div>
      </div>
    );
  }
}

export default App;
