import React, { Component } from "react";
import Link from "next/link";
import axios from "axios";
import "../scss/footer.scss";

class FooterSection extends Component {
  state = {
    formData: {
      preference: "Free Market Updates",
      email: "",
      interestIndustry: "",
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

  // handleChange = name => event => {
  //   this.setState({
  //     [name]: event.target.value
  //   });
  //   const formData = { ...this.state.formData };
  //   formData[event.target.name] = event.target.value;
  //   this.setState({
  //     formData
  //   });
  // };

  handleSubmit = e => {
    e.preventDefault();
    const formData = { ...this.state.formData };
    formData.productTitle = document.title;
    formData.url = window.location.href;
    this.setState({ status: "Submitting Details", popup: true, formData }, async () => {
      const formAPI =
        "https://product-page-api.herokuapp.com/api/smtp/footerForm";
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
        <footer>
          <div className="footer-box">
            <div className="container">
              <div className="footer">
                <div className="section1">
                  <img
                    src="/static/Images/DMI-Logo-White.png"
                    alt="Logo-White"
                  />
                  <p>
                    DataM Intelligence 4Market Research is a market intelligence
                    platform which gives access to syndicated, customised
                    reports to its clients at one place. As a firm with rich
                    experience in research and consulting across multiple
                    domains we are one stop solution that will cater to the
                    needs of clients in key business areas.
                  </p>
                </div>
                <div className="section2">
                  <div>
                    <h3>Pages</h3>
                    <ul>
                      <li>
                        <Link href="/">
                          <a>Home</a>
                        </Link>
                      </li>
                      {/* <li>
                        <Link href="/">
                          <a>Our Methodology</a>
                        </Link>
                      </li> */}
                      <li>
                        <Link href={`/mainCategory?main=industry-verticals`} as={`/category/industry-verticals`}>
                          <a>Industry Verticals</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/join-us">
                          <a>Careers</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact">
                          <a>Contact Us</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/about">
                          <a>About Us</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/terms-conditions">
                          <a>Terms & Conditions</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/privacy-policy">
                          <a>Privacy Policy</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="section3">
                  <div>
                    <h3> Contact </h3>
                    <p>
                      <span>Corporate Address</span> <br />
                      1st floor, Phoenix Tech Tower, Plo no: 14/46, Habsidguda,
                      IDA-Uppal, Hyderabad-500039, Telangana
                    </p>
                    <p>
                      <span>Email</span>
                      <br /> info@datamintelligence.com
                    </p>
                    <p>
                      <span>Phone </span>
                      <br />
                      +1 877-441-4866
                    </p>
                  </div>
                </div>
                <div className="section4">
                  <form onSubmit={this.handleSubmit}>
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="Email"
                      required
                      value={this.state.formData.email}
                      onChange={this.handleChangeInput}
                    />
                    <input
                      placeholder="Industry of Interest"
                      name="interestIndustry"
                      required
                      value={this.state.formData.interestIndustry}
                      onChange={this.handleChangeInput}
                    />
                    <select
                      required
                      name="preference"
                      value={this.state.formData.preference}
                      onChange={this.handleChangeInput}
                    >
                      <option key="1" value="Free Market Updates">
                        Free Market Updates
                      </option>
                      <option key="2" value="Newsletter">
                        Newsletter
                      </option>
                      <option key="3" value="Reports">
                        Reports
                      </option>
                      <option key="4" value="Offers">
                        Offers
                      </option>
                    </select>
                    {this.state.popup === true && <p>{this.state.status}</p>}
                    <button>Sign Up</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="montaigne">
          <div className="container ">
            <p>Copyright &copy; 2019 DataM Intelligence. All Rights Reserved</p>
            <p>
              Designed and Developed by
              <a href="www.montaigne.co"> Montaigne Labs</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterSection;
