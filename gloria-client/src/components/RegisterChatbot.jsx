import React, { Component } from "react";
import axios from "axios";
import "./RegisterChatbot.css";
import Popup from "./Popup";

class RegisterChatbot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL: "/images/default-avatar.jpg",
      uploadStatus: false,
      showPopup: false,
      message: ""
    };
    this.handleRegisterChatbot = this.handleRegisterChatbot.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
  }

  handleRegisterChatbot(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append("botname", this.botname.value);
    data.append(
      "botdata",
      JSON.stringify({
        id: 0,
        name: this.botname.value,
        language: this.language.value,
        topic: ["topic1"]
      })
    );
    console.log(data);

    axios
      .post("http://localhost:3001/register", data)
      .then(response => {
        this.state.message = "Bot saved and initialized";
        this.setState({
          showPopup: !this.state.showPopup,
          message: this.state.message
        });
      })
      .catch(error => {
        console.log(error);
        let errormsg = "";
        if (error.response && error.response.data)
          errormsg = error.response.data;
        else errormsg = error.toString();
        this.setState({
          showPopup: !this.state.showPopup,
          message: errormsg
        });
      });
  }

  styles = {
    fontSize: 20,
    fontWieght: "bold",
    width: 40,
    verticalAlign: "middle"
  };

  togglePopup() {
    console.log("toggle");
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  //Render the layout
  render() {
    return (
      <div className="register-form">
        <form onSubmit={this.handleRegisterChatbot}>
          {/*Might need a title here, like "Register Chatbot" */}

          {/*Chatbot Avatar*/}
          <img src={this.state.imageURL} alt="Avatar" className="avatar" />

          {/*ChatBot Name*/}
          <div className="form-group">
            <label htmlFor="txtChatbotName">Chatbot Name</label>
            <input
              key="txtChatbotName"
              className="form-control"
              ref={ref => {
                this.botname = ref;
              }}
              type="text"
              placeholder="Name of the chatbot"
            />
          </div>

          {/*Language*/}
          <div className="form-group">
            <label htmlFor="txtLanguage">Language</label>
            <select
              key="txtLanguage"
              className="form-control"
              ref={ref => {
                this.language = ref;
              }}
              type="list"
              placeholder="Topics of the chatbot"
            >
              <option key="l1">English</option>
              <option key="l2">Turkish</option>
            </select>
          </div>

          {/*Chatbot Description*/}
          <div className="form-group">
            <label htmlFor="txtDesc">Description</label>
            <textarea
              key="txtDesc"
              className="form-control"
              ref={ref => {
                this.description = ref;
              }}
              type="text"
              rows="3"
              placeholder="Optional description"
            />
          </div>

          {/*Topics*/}
          <div className="form-group">
            <label htmlFor="txtTopic">Topic</label>
            <input
              key="txtTopic"
              className="form-control"
              ref={ref => {
                this.topic = ref;
              }}
              type="text"
              placeholder="Topics of the chatbot"
            />
          </div>

          {/*Sharepoint URL*/}
          <div className="form-group">
            <label htmlFor="txtSPURL">Sharepoint URL</label>
            <input
              key="txtSPURL"
              className="form-control"
              ref={ref => {
                this.sharepointurl = ref;
              }}
              type="text"
              placeholder="Sharepoint URL to initialize the chatbot"
            />
          </div>

          {/*Admin user*/}
          {/*Access points*/}

          <button
            key="btnSubmit"
            className="btn btn-primary buttonSubmit"
            type="submit"
          >
            Register
          </button>
        </form>

        {this.state.showPopup ? (
          <Popup text={this.state.message} closePopup={this.togglePopup} />
        ) : null}
      </div>
    );
  }
}

export default RegisterChatbot;
