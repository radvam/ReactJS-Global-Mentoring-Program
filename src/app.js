import React, { Component } from "react";

import reactImg from "./img/react.jpeg";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>
          Hello world!
        </h1>
        <img src={reactImg} className="react-img" className="react-img" />
      </div>
    );
  }
}

export default App;
