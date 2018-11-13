import React, { Component } from "react";
import "./RegisterChatbot.css";

class Popup extends React.Component {
  //static contextType =

  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <div>{this.props.text}</div>
          <br />
          <button className="btn btn-primary" onClick={this.props.closePopup}>
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default Popup;
