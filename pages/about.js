import React, { Component } from "react";
import Head from "next/head";
import Navbar from "../components/nav";
import Footer from "../components/footer";
import "../scss/about-dmi.scss";

const data = [
  {
    statement:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
  },
  {
    statement:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
  },
  {
    statement:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
  },
  {
    statement:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
  },
  {
    statement:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
  }
];

class AboutPage extends React.Component {
  state = {
    value: 0
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

  handleBack = () => {
    if (this.state.value !== 1 && this.state.value > 0) {
      this.setState({
        value: this.state.value - 1
      });
    } else if (this.state.value === 0) {
      this.setState({
        value: data.length - 1
      });
    } else {
      this.setState({
        value: 0
      });
    }
  };
  handleNext = () => {
    if (
      this.state.value !== data.length - 1 &&
      this.state.value < data.length - 1
    ) {
      this.setState({
        value: this.state.value + 1
      });
    } else if (this.state.value === data.length - 1) {
      this.setState({
        value: 0
      });
    } else {
      this.setState({
        value: data.length - 1
      });
    }
  };
  render() {
    return (
      <div>
        <Head>
          <title>About DataM Intelligence</title>
        </Head>
        <div className="about-dmi-main-box">
          <div className="with-background-box">
            <Navbar searchProps={this.props.data} />
            <div className="dmi-quote-box">
              <img src="/static/icons/quote.png" className="quote-img" />
              <img
                src="/static/Images/dmi-logo 2.png"
                className="dmi-log-about-page"
              />
              <h3>
                We at DMI make sure your business is consistently remunerative
                with our extensive knowledge and profound understanding of the
                market.
              </h3>
              <button>GET IN TOUCH WITH US</button>
            </div>
          </div>
          <div className="dmi-misson-box">
            <p>
              <span>MISSION-ONE</span>t is a long established fact that a reader
              will be distracted by the readable content of a page when looking
              at its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable
              English. Many desktop publishing packages and web page editors now
              use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy.
              Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like).{" "}
            </p>
          </div>
          <div className="we-are-dmi-box">
            <div className="we-are-dmi-top">
              <div className="we-are-dmi-left">
                <img src="/static/Images/WE ARE DMI 2.png" />
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
                </p>
              </div>
              <div className="we-are-dmi-right">
                <img src="/static/Images/we-are-dmi.jpg" />
              </div>
            </div>
            <div className="we-are-dmi-bottom">
              <span>2017</span>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
            </div>
          </div>
          <div className="we-thrive-to-serve-box">
            <div className="padding-serve" />
            <div className="serve-main">
              <h2>WE THRIVE TO SERVE</h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
              <br />
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
              <button>JOIN US</button>
            </div>
          </div>
          <div className="our-forte-box">
            <span>OUR FORTE</span>
            <div className="our-forte-container">
              <button className="slide-back-btn" onClick={this.handleBack}>
                <img src="/static/Images/back.svg" />
              </button>
              <div className="slider-box">
                <div
                  className="our-forte-slider"
                  style={{
                    transform: `translateX(-${this.state.value * 100}%)`,
                    transition: "transform 0.5s ease-in-out"
                  }}
                >
                  {data.map((data, index) => (
                    <p
                      key={index}
                      className={`${this.state.value === index &&
                        "active-statement"}`}
                    >
                      {data.statement}
                    </p>
                  ))}
                </div>
              </div>
              <button className="slide-next-btn" onClick={this.handleNext}>
                <img src="/static/Images/next.svg" />
              </button>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default AboutPage;
