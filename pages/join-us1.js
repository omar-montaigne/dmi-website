import React from "react";
import Head from "next/head";
import axios from "axios";
import Layout from "../components/layout";

class JOINUS extends React.Component {
  state = {
    formData: {
      name: "",
      email: "",
      phone: "",
      expertise: "",
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
        "https://product-page-api.herokuapp.com/api/smtp/careers";
      const newData = this.state.formData;
      const response = await axios.post(formAPI, newData);
      console.log(newData);
      console.log(response);
      this.setState({ status: response.data.msg });
    });

  }
  render() {
    return (
      <div>
        <Head>
          <title>Join Us</title>
        </Head>
        <Layout>
          <h1>JOIN THE TEAM</h1>
          <div>
            <strong>DataM Intelligence 4Market Research </strong>is a market
            intelligence platform which gives access to syndicated, customised
            reports to its clients at one place. As a firm with rich experience in
            research and consulting across multiple domains we are one stop
            solution that will cater to the needs of clients in key business
            areas.
          <span>
              DMI benefits thousands of companies by helping them take their
              innovations early to the market by providing a complete view of the
              market with statistical forecasts
          </span>
            <span>.</span>
            <span>We Help you in building up your Career.</span>
            <h4>
              <span style={{ color: "#0581ad" }}>
                <strong>Join Us.</strong>
              </span>
            </h4>
          </div>
          <div>
            <form onSubmit={this.handleSubmit}>
              <label>
                Name
              <input
                  name="name"
                  type="text"
                  placeholder="Enter Your Name"
                  required
                  value={this.state.formData.name}
                  onChange={this.handleChangeInput}
                />
              </label>
              <label>
                Phone Number
              <input
                  name="phone"
                  type="number"
                  placeholder="Enter Your Contact Number"
                  required
                  value={this.state.formData.phone}
                  onChange={this.handleChangeInput}
                />
              </label>
              <label>
                Email
              <input
                  name="email"
                  type="email"
                  placeholder="Enter Your Email"
                  required
                  value={this.state.formData.email}
                  onChange={this.handleChangeInput}
                />
              </label>
              <label>
                Expertise
              <input
                  name="expertise"
                  type="text"
                  placeholder="Enter Your Expertise"
                  required
                  value={this.state.formData.expertise}
                  onChange={this.handleChangeInput}
                />
              </label>

              <label>
                Message
              <textarea
                  name="message"
                  type="text"
                  placeholder="Enter Your Message"
                  required
                  value={this.state.formData.message}
                  onChange={this.handleChangeInput}
                />
                <button>Submit</button>
              </label>
              {this.state.popup === true && <p>{this.state.status}</p>}
            </form>
          </div>
        </Layout>
      </div>
    );
  }
};

export default JOINUS;
