import React, { Component } from "react";
import logo from "./logo.svg";
import NavBar from "./components/NavBar";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import RegisterChatbot from "./components/RegisterChatbot";
import "./styles/App.css";
import { Redirect } from "react-router-dom";
import ChartExample from "./components/ChartExample";

class App extends Component {
  state = {
    selectedMenu: "registerbot"
  };

  //Not used
  handleOnSelect = selectedItem => {
    const selectedMenu = selectedItem;
    this.setState({ selectedMenu });
  };

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <NavBar onSelect={this.handleOnSelect} />
          <div className="container">
            <Route path="/" exact component={RegisterChatbot} />
            <Route path="/ChartExample" component={ChartExample} />
            <Route path="/RegisterChatbot" component={RegisterChatbot} />
          </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
