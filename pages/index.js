import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Navbar from "../components/nav";
import Footer from "../components/footer";
import SearchBar, { TopSearches } from "../components/searchbar";
import FeaturesDMI from "../components/features";
import AboutCompass from "../components/about-compass";
import HiringDesc from "../components/hiring-desc";
import MethodDesc from "../components/methodology-desc";
import Testimonials from "../components/testimonials";
import HomeCounter from "../components/home-counter";
import Head from "next/head";
import "../scss/searchbar.scss";

class IndexPage extends Component {
  state = {};

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

  render() {
    return (
      <div>
        <Head>
          <title>DataM Intelligence</title>
          <meta
            name="description"
            content="ahsdfjasdjfkajsdhfkjashdfkansdkfhakds"
          />
        </Head>
        <div className="home-main-box" style={{ overflowX: "hidden" }}>
          <div>
            <div className="top-box">
              <Navbar searchProps={this.props.data} />
              <div className="home-top-section ">
                <SearchBar searchProps={this.props.data} >
                  <TopSearches />
                </SearchBar>
              </div>
            </div>
            <FeaturesDMI />
            <AboutCompass />
            <HiringDesc />
            <MethodDesc />
            <Testimonials />
            <HomeCounter />
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default IndexPage;

{/* "dev": "node server.js",
    "build": "next build",
    "start": "next start -p $PORT node server.js",
    
 "scripts": {   "dev": "node server.js",
 "build": "./node_modules/next/dist/bin/next build",
 "heroku-postbuild": "./node_modules/next/dist/bin/next build",
  "start": "NODE_ENV=production node server.js"
 }, */}
