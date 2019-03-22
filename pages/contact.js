import React from "react";
import Head from "next/head";
import axios from "axios";
import Navbar from "../components/nav";
import Footer from "../components/footer";
import "../scss/contact.scss";

class ContactPage extends React.Component {
  state = {
    formData: {
      name: "",
      email: "",
      phone: "",
      organization: "",
      subject: "",
      message: "",
      productTitle: "",
      url: ""
    },
    status: "",
    popup: false
  };

  static async getInitialProps() {
    const url = await fetch(
      `https://product-page-api.herokuapp.com/api/category/allData`
    );
    const data = await url.json();

    const newdata = {
      data: data
    }

    return newdata
  }

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
        "https://product-page-api.herokuapp.com/api/smtp/contactForm";
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
          <title>Contact Us Page DMI</title>
        </Head>
        <div className="contact-box">
          <div className="contact-nav">
            <Navbar searchProps={this.props.data} />
          </div>
          <div className="contact-form-box">
            <h2>LET US HELP YOU OUT</h2>
            <form className="contact-form" onSubmit={this.handleSubmit}>
              <div className="form-block">
                <div className="form-item">
                  <label>Name</label>
                  <input
                    name="name"
                    placeholder="Enter Your Name"
                    type="text"
                    required
                    value={this.state.formData.name}
                    onChange={this.handleChangeInput}
                  />
                </div>
                <div className="form-item">
                  <label>Phone Number</label>
                  <input
                    name="phone"
                    placeholder="Enter Your Contact Number"
                    type="number"
                    required
                    value={this.state.formData.phone}
                    onChange={this.handleChangeInput}
                  />
                </div>
              </div>
              <div className="form-block">

                <div className="form-item">
                  <label>Business Email</label>
                  <input
                    name="email"
                    placeholder="Enter Your Business Email"
                    type="email"
                    required
                    value={this.state.formData.email}
                    onChange={this.handleChangeInput}
                  />
                </div>
                <div className="form-item">
                  <label>Organization</label>
                  <input
                    name="organization"
                    placeholder="Enter Your Organization Name"
                    type="text"
                    required
                    value={this.state.formData.organization}
                    onChange={this.handleChangeInput}
                  />
                </div>
              </div>
              <div className="form-block">
                <div className="form-item-full">
                  <label>What is your message about?</label>
                  <select name="subject" value={this.state.formData.subject}
                    onChange={this.handleChangeInput}>
                    <option key="3" value="Ready Report Enquiry">Ready Report Enquiry</option>
                    <option key="3" value="Tailor My Report">Tailor My Report</option>
                    <option key="3" value="Expert Dicussion">Expert Dicussion</option>
                    <option key="3" value="Request Free Demo">Request Free Demo</option>
                  </select>
                </div>
              </div>
              <div className="form-block" >
                <div className="form-item-full">
                  <label>Message</label>
                  <textarea placeholder="Enter Your Message" name="message" value={this.state.formData.message}
                    onChange={this.handleChangeInput} />
                </div>
              </div>
              <button className="form-item">Submit</button>
              {this.state.popup === true && <p>{this.state.status}</p>}
            </form>
          </div>
          <div className="contact-map-area">
            <div class="mapouter">
              <div class="gmap_canvas">
                <iframe
                  width="1080"
                  height="631"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=datamintelligence&t=k&z=17&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                />
                <a href="https://www.jetzt-drucken-lassen.de" />
              </div>

              <a
                href="https://www.embedgooglemap.net"
                rel="nofollow"
                target="_blank"
              />
            </div>
          </div>
          <div className="contact-details">
            <div style={{ width: "33.33%" }}>
              <h5>CONTACT</h5>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <img src="/static/Images/us-flag.png" />
                <p>+1 877-441-4866</p>
              </div>
            </div>
            <div style={{ width: "33.33%" }}>
              <h5>wwww.datamintelligence.com</h5>
              <h5>EMAIL</h5>
              <p>
                <b>Sales</b>
              </p>
              <p>info@datamintelligence.com</p>
              <p>
                <b>PR & Media</b>
              </p>
              <p>media@datamintelligence.com</p>
            </div>
            <div style={{ width: "33.33%" }}>
              <h5>CORPORATE ADDRESS</h5>
              <p>
                1st floor, Phoenix Tech Tower,
              <br />
                Plot no: 14/46, Habsiguda, IDA-Uppal,
              <br />
                Hyderabad-500039, Telangana.
            </p>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
};

export default ContactPage;
