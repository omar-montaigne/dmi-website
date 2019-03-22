import React, { Component } from "react";
import axios from "axios";
import "../scss/bundle-report.scss";

class BundeReport extends Component {
  state = {
    value: 0,
    formData: {
      name: "",
      email: "",
      subscriptionType: "Bundle Subscription",
      message: "",
      productTitle: "",
      url: ""
    },
    status: "",
    popup: false
  };

  handleChange = () => {
    this.setState({
      value: 1
    });
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
        "https://product-page-api.herokuapp.com/api/smtp/letUsHelp";
      const newData = this.state.formData;
      const response = await axios.post(formAPI, newData);
      console.log(newData);
      console.log(response);
      this.setState({ status: response.data.msg });
    });

  }
  render() {
    return (
      <div className="bundle-box">
        <h3>Could not find what you need?</h3>
        <div
          className={`bundle-hide ${this.state.value === 1 && "bundle-hidden"}`}
        >
          <p>
            Bundle Subscription or
            <br /> Customized reports
          </p>
          <button onClick={this.handleChange}>Let Us Help You</button>
        </div>
        <div
          className={`bundle-display ${this.state.value === 0 &&
            "bundle-hidden"}`}
        >
          <p>Let Us Help You</p>
          <form className="bundle-form" onSubmit={this.handleSubmit}>
            <input
              required
              name="name"
              placeholder="Name"
              value={this.state.formData.name}
              onChange={this.handleChangeInput}
            />
            <input
              required
              placeholder="email"
              type="email"
              name="email"
              autoComplete="email"
              value={this.state.formData.email} onChange={this.handleChangeInput}
            />
            <select name="subscriptionType" value={this.state.formData.subscriptionType} onChange={this.handleChangeInput}>
              <option>Bundle Subscription</option>
              <option>Customized reports</option>
            </select>
            <textarea placeholder="Leave a Message" name="message" value={this.state.formData.message} onChange={this.handleChangeInput} />
            <button className="bundle-submit">Submit</button>
            {this.state.popup === true && <p>{this.state.status}</p>}
          </form>
        </div>
      </div>
    );
  }
}

export default BundeReport;
