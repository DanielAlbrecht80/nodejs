import React, { Component } from "react";
import { Link } from "react-router";
import "../styles/App.css";

//Stateless Functional Component
class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <ul className="navbar">
          <li
            className="navbar-brand menuitem"
            onClick={() => this.props.onSelect(1)}
          >
            Register Chatbot
          </li>
          <li
            className="navbar-brand menuitem"
            onClick={() => this.props.onSelect(2)}
          >
            Chart Example
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
