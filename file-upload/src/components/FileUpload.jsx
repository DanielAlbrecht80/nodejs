import React, { Component } from "react";
import axios from "axios";

class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL: "none",
      uploadStatus: false
    };
    this.handleUploadImage = this.handleUploadImage.bind(this);
    console.log("Bound done!");
  }

  handleUploadImage(ev) {
    ev.preventDefault();
    console.log("Event fired!");
    const data = new FormData();
    data.append("file", this.uploadInput.files[0]);
    data.append("filename", this.fileName.value);

    axios
      .post("http://localhost:8000/upload", data)
      .then(response => {
        console.log(response);
        this.setState({
          imageURL: `http://localhost:8000/${response.data.file.replace(
            "public/",
            ""
          )}`,
          uploadStatus: true
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div class="container">
        <form onSubmit={this.handleUploadImage}>
          <div className="form-group">
            <input
              className="form-control"
              ref={ref => {
                this.uploadInput = ref;
              }}
              type="file"
            />
          </div>

          <div className="form-group">
            <input
              className="form-control"
              ref={ref => {
                this.fileName = ref;
              }}
              type="text"
              placeholder="Optional name for the file"
            />
          </div>

          <button className="btn btn-success" type>
            Upload
          </button>
          <br />
          <a href={this.state.imageURL}>{this.state.imageURL}</a>
        </form>
      </div>
    );
  }
}

export default FileUpload;
