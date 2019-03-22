import React, { Component } from "react";
import axios from "axios";
import "../scss/download-sample-form.scss";
import { SIGABRT } from "constants";

class DownloadSample extends Component {
  state = {
    formData: {
      name: "",
      email: "",
      phone: "",
      company: "",
      designation: "",
      message: "",
      productTitle: "",
      url: ""
    },
    status: "",
    popup: false
  };

  handleChangeInput = event => {
    const formData = { ...this.state.formData };
    formData[event.target.name] = event.target.value;
    this.setState({
      formData
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const formData = { ...this.state.formData };
    formData.productTitle = document.title;
    formData.url = window.location.href;
    this.setState({ status: "Submitting Details", popup: true, formData }, async () => {
      const formAPI =
        "https://product-page-api.herokuapp.com/api/smtp/downloadSample";
      const newData = this.state.formData;
      const response = await axios.post(formAPI, newData);
      console.log(newData);
      console.log(response);
      this.setState({ status: response.data.msg });
    });
  }

  render() {
    return (
      <div
        className="ds-form-box"
        style={{
          transition: "max-height .5s ease-in-out",
          maxHeight: this.props.height,
          overflow: "hidden"
        }}
      >
        <div className="container">
          <h2>Guide your sample to inbox</h2>
          <button className="close-form" onClick={this.props.onClose}>
            X
          </button>
          <form className="ds-form clearfix" onSubmit={this.handleSubmit}>
            <input name="name" placeholder="name" required className="normal" value={this.state.formData.name}
              onChange={this.handleChangeInput} />
            <input
              name="phone"
              placeholder="phone"
              type="number"
              required
              className="normal"
              value={this.state.formData.phone}
              onChange={this.handleChangeInput}
            />

            <input
              required
              autoComplete="email"
              type="email"
              name="email"
              placeholder="email"
              className="normal"
              value={this.state.formData.email}
              onChange={this.handleChangeInput}
            />
            <input
              name="company"
              placeholder="company"
              required
              className="normal"
              value={this.state.formData.company}
              onChange={this.handleChangeInput}
            />
            <input
              name="designation"
              placeholder="designation"
              required
              className="fullwidth"
              value={this.state.formData.designation}
              onChange={this.handleChangeInput}
            />

            <textarea
              name="message"
              type="text"
              required
              value="Message"
              className="fullwidth"
              value={this.state.formData.message}
              onChange={this.handleChangeInput}
            >
              Your Message
            </textarea>
            <button>Submit</button>
            {this.state.popup === true && <p style={{ fontSize: "2rem" }}>{this.state.status}</p>}
          </form>
        </div>
      </div>
    );
  }
}

export default DownloadSample;
