import React, { Component } from "react";
import { BorwserRoute, NavLink, Route } from "react-router-dom";
import "../styles/App.css";

//Stateless Functional Component
export default NavBar => (
  <nav className="navbar navbar-dark bg-dark">
    <ul className="navbar">
      <li className="navbar-brand menuitem">
        <NavLink to="/RegisterChatbot">Register Chatbot</NavLink>
      </li>
      <li className="navbar-brand menuitem">
        <NavLink to="/ChartExample">Chart Example</NavLink>
      </li>
    </ul>
  </nav>
);
