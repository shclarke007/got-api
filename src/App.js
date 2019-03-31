import React, { Component } from "react";
import "./App.css";
import Houses from "./Houses";
import PageHeader from "./components/headers/PageHeader";

class App extends Component {
  render() {
    return (
      <div className="">
        <header className="title">
          <PageHeader />
        </header>
        <div className="houses">
          <Houses />
        </div>
      </div>
    );
  }
}

export default App;
