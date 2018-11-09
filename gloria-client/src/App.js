import React, { Component } from "react";
import logo from "./logo.svg";
import NavBar from "./components/NavBar";
import RegisterChatbot from "./components/RegisterChatbot";
import "./styles/App.css";
import { Redirect } from "react-router-dom";
import ChartExample from "./components/ChartExample";

class App extends Component {
  state = {
    selectedMenu: "registerbot"
  };

  handleOnSelect = selectedItem => {
    const selectedMenu = selectedItem;
    this.setState({ selectedMenu });
  };

  render() {
    let content = <RegisterChatbot />;
    if (this.state.selectedMenu === 2) {
      content = <ChartExample />;
    } else {
      content = <RegisterChatbot />;
    }

    return (
      <React.Fragment>
        <NavBar onSelect={this.handleOnSelect} />
        <main className="container">
          <div className="App">{content}</div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
