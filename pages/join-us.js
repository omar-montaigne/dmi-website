import React from "react";
import Head from "next/head";
import axios from "axios";
import Layout from "../components/layout";
import NavBar from "../components/nav";
import Footer from '../components/footer'

// import "../scss/join-us.scss";

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
          <meta name="viewport" content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />
          <meta charSet="utf-8" />
        </Head>
        <div className="navbar">
          <NavBar />
        </div>
        <div id="join-us">
          <h1>JOIN THE TEAM</h1>
          <div className="content-container">
            <div className="content-left">
              <p>
                <strong className="orange-text">DataM Intelligence 4Market Research </strong>is a market intelligence platform which gives access to syndicated, customised reports to its clients at one place. As a firm with rich experience in research and consulting across multiple domains we are one stop solution that will cater to the needs of clients in key business areas.
              </p>
              <p>
                DMI benefits thousands of companies by helping them take their nnovations early to the market by providing a complete view of the market with statistical forecasts
              </p>
              <p><strong>We Help you in building up your Career.</strong></p>
              <p className="orange-text strong">Join us.</p>
            </div>
            <div className="content-right">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter Your Name"
                    required
                    value={this.state.formData.name}
                    onChange={this.handleChangeInput}
                  />
                  <label>
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    type="number"
                    placeholder="Enter Your Contact Number"
                    required
                    value={this.state.formData.phone}
                    onChange={this.handleChangeInput}
                  />
                </div>

                <div className="form-group">
                  <label>
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter Your Email"
                    required
                    value={this.state.formData.email}
                    onChange={this.handleChangeInput}
                  />
                  <label>
                    Expertise
                  </label>
                  <input
                    name="expertise"
                    type="text"
                    placeholder="Enter Your Expertise"
                    required
                    value={this.state.formData.expertise}
                    onChange={this.handleChangeInput}
                  />
                </div>

                <div className="form-group-100">
                  <label>
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="10"
                    type="text"
                    placeholder="Enter Your Message"
                    required
                    value={this.state.formData.message}
                    onChange={this.handleChangeInput}
                  />
                </div>
                <button>Submit</button>
                {/* {this.state.popup === true && <p>{this.state.status}</p>} */}
              </form>
            </div>
          </div>
          <Footer />
        </div>
        {/* Inline styles for the top header */}
        <style jsx>{`
        .navbar {
          height: 40rem;
          background-image: url('/static/Images/join-us-bg.jpg');
          background-repeat: no-repeat;
          background-position: center bottom;
          background-size: cover;
        }

        #join-us {
          background: #f5f5f5;
          padding-top: 80px;
          margin: 0px;
        }
        #join-us p.strong {
          font-weight: 700;
        }
        #join-us p.orange-text {
          color: #f60;
        }
        #join-us .content-container {
          display: flex;
          justify-content: center;
          padding: 6rem 2rem;
        }
        #join-us h1 {
          color: #f60;
          font-family: 'bebas neue';
          font-size: 5.4rem;
          line-height: 65px;
          letter-spacing: -0.07px;
          text-align: center;
        }
        #join-us .content-left {
          max-width: 500px;
          padding: 20px 20px;
        }
        #join-us .content-left p {
          font-family: 'Muli';
          font-size: 1.8rem;
          line-height: 22px;
          letter-spacing: 0px;
          padding-bottom: 20px;
          color: #2e2e2e;
        }
        #join-us .content-right {
          max-width: 600px;
          padding: 0px 10px;
        }
        #join-us .content-right form {
          display: flex;
          justify-content: center;
          flex-direction: row;
          flex-wrap: wrap;
          padding: 20px;
          font-family: 'Muli';
        }
        #join-us .content-right form .form-group {
          width: 50%;
          display: flex;
          flex-direction: column;
        }
        #join-us .content-right form .form-group-100 {
          width: 100%;
        }
        #join-us .content-right form label {
          font-weight: bold;
          display: block;
          color: #2e2e2e;
        }
        #join-us .content-right form input {
          background: #e8e8e8;
          width: 100%;
          padding: 10px;
          margin-top: 5px;
          margin-bottom: 20px;
        }
        #join-us .content-right form textarea {
          background: #e8e8e8;
          width: 100%;
          padding: 20px 20px;
          margin-top: 5px;
          margin-bottom: 20px;
          font-family: 'Muli';
        }
        #join-us .content-right form button {
          background: #2e2e2e;
          padding: 10px 20px;
          color: #fff;
          font-family: 'Muli';
        }
        #join-us .content-right form * {
          box-sizing: border-box;
        }
        #join-us .content-right form > div:nth-child(1) {
          padding-right: 10px;
        }
        #join-us .content-right form > div:nth-child(2) {
          padding-left: 10px;
        }
        .footer * {
          box-sizing: content-box;
        }
        .footer footer .footer-box {
          width: 100%;
          box-sizing: content-box;
        }
        /** 
         * !The below styles are for mobile and tablet
         */
        /* Mobile */
        @media (min-width: 320px) and (max-width: 880px) {
          #join-us .content-container {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
          }
          #join-us .content-left {
            max-width: 100%;
          }
          #join-us .content-right {
            max-width: 100%;
          }
        }
        

      `}</style>
      </div>
    );
  }
};

export default JOINUS;
