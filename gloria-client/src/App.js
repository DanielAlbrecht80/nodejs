import React, { Component } from "react";
import logo from "./logo.svg";
import RegisterChatbot from "./components/RegisterChatbot";
import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <RegisterChatbot />
      </div>
    );
  }
}

export default App;
