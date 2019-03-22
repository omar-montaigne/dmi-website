import React, { Component } from "react";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import Router, { withRouter } from "next/router";
import axios from "axios";
import BuyReport from "../components/buy-report";
import ProductTitleSection from "../components/product-main";
import RelatedReportSec from "../components/related-reports-sec";
import RDSection from "../components/report-data-sec";
import BundeReport from "../components/bundle-report";
import Layout from "../components/layout";
import Breadcrumb from "../components/breadcrumb";
import cart from "./cart";

import "../scss/product-page.scss";

class ProductPageTemplate extends Component {
  state = {
    keyURL: this.props.data.slug,
    bgImage: "product-page-bg.jpg",
    PDate: "",
    // Category: {
    //   mainSelect: "",
    //   productSelect: "",
    //   subSelect: ""
    // },
    relatedReports: [],
    productTitle: this.props.data.Product_Title,
    selectedPrice: "",
    slug: this.props.data.slug,
    value: 0,
  };

  async componentDidMount() {
    const date = this.props.data.created;
    const fullDate = this.props.data.created.substring(0, date.indexOf("T"));

    const RR = await axios.get(`https://product-page-api.herokuapp.com/api/products/getrr/${this.props.data.Category.subSelect}`);
    // const data = this.giveDate(fullDate);
    console.log(RR.data);
    this.setState({
      PDate: fullDate,
      relatedReports: RR.data
    });

  }


  componentDidUpdate(oldProps) {
    const newProps = this.props
    if (oldProps !== newProps) {
      this.setState({
        keyURL: this.props.data.slug,
        PDate: "",
        Category: {
          mainSelect: "",
          productSelect: "",
          subSelect: ""
        },
        relatedReports: [],
        productTitle: this.props.data.Product_Title,
        selectedPrice: this.props.data.Price.Single,
        slug: this.props.data.slug,
        value: 1,
      }, async () => {
        const date = this.props.data.created;
        const fullDate = this.props.data.created.substring(0, date.indexOf("T"));

        const RR = await axios.get(`https://product-page-api.herokuapp.com/api/products/getrr/${this.props.data.Category.subSelect}`);
        // const data = this.giveDate(fullDate);
        console.log(RR.data);
        this.setState({
          PDate: fullDate,
          relatedReports: RR.data
        });
      })
    }
  }

  // giveDate = date => {
  //   const data = date.indexOf("T");
  //   return data.substring(data);
  // };
  static async getInitialProps({ req, res, query: { keyurl } }) {
    // const { id } = context.query;
    const url = await fetch(
      `https://product-page-api.herokuapp.com/api/products/product/${keyurl}`
    );
    const data = await url.json();
    // if (data === null) {
    //   Router.push("/pagenotfound");
    // } else {

    const searchurl = await fetch(
      `https://product-page-api.herokuapp.com/api/category/allData`
    );
    const searchData = await searchurl.json();

    if (data === null) {
      res.statusCode = 404;
      res.set("application/html").send(`<h1>Page not found</h1>
      `);
      res.end(`${<h1>Page not found</h1>}`);

      return;
    } else {
      return {
        data, searchData
      };
    }
  }

  handlePriceRadioButton = value => e => {
    this.setState({
      value: value,
      selectedPrice: e.target.value
    });
  };

  handlePriceSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    if (sessionStorage) {
      if (sessionStorage.getItem("cart")) {
        let prevCart = JSON.parse([sessionStorage.getItem("cart")]);
        const newItem = { productTitle: this.state.productTitle, selectedPrice: this.state.selectedPrice, slug: this.props.data.slug, imagePath: this.props.data.ImagePath };
        prevCart.push(newItem);
        sessionStorage.setItem("cart", JSON.stringify(prevCart));
      }
      else {
        sessionStorage.setItem("cart", JSON.stringify([{ productTitle: this.state.productTitle, selectedPrice: this.state.selectedPrice, slug: this.props.data.slug, imagePath: this.props.data.ImagePath }]));
      }

      // sessionStorage.setItem("cart", [...sessionStorage.getItem("cart") || "", { productTitle: this.state.productTitle, selectedPrice: this.state.selectedPrice, slug: this.props.data.slug }]);

      Router.push({
        pathname: "/cart",
        query: {
          productTitle: this.state.productTitle,
          selectedPrice: this.state.selectedPrice,
          slug: this.props.data.slug,
          imagePath: this.props.data.ImagePath
        }
      },
        "/cart"
      )
    }
  }

  // handleChangeRequest = event => {
  //   const request = { ...this.state.request };
  //   request[event.target.name] = event.target.value;
  //   // request.product_title = document.title;
  //   // request.url = window.location.href;
  //   this.setState({ request });
  // };

  // handleRequestSubmit = async () => {
  //   const request = { ...this.state.request };
  //   request.product_title = " " + document.title;
  //   request.url = " " + window.location.href;
  //   this.setState({ request }, () => {
  //     const formAPI =
  //       "https://product-page-api.herokuapp.com/api/products/product/smtp";
  //     const newData = this.state.request;
  //     const { data: reply } = axios.post(formAPI, newData);
  //     console.log(newData);
  //     console.log(reply);
  //   });
  // };

  render() {
    return (
      <div>
        <Head>
          <title>{this.props.data.Meta_title}</title>
          <meta name="description" content={this.props.data.Meta_Desc} />
          <meta name="keywords" content={this.props.data.keywordArea.keyword} />
          <meta name="viewport" content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />
          <meta charSet="utf-8" />
        </Head>
        <div
          style={{
            backgroundImage: "url(/static/Images/product-page-bg.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}
        >
          <Layout bgImage={this.state.bgImage} searchProps={this.props.searchData}>
            <div>
              <Breadcrumb category={this.props.data.Category} breadtitle={this.props.data.BreadCrumb} Title={this.props.data.Product_Title} />
              <div className="clearfix" style={{ paddingTop: "4rem" }}>
                <ProductTitleSection
                  Title={this.props.data.Product_Title}
                  ImagePath={this.props.data.ImagePath}
                  PublishedDate={this.state.PDate}
                  SKU={this.props.data.SKU}
                />
              </div>
              <div style={{ backgroundColor: "#fff" }}>
                <div className="clearfix container">
                  <div className="left-box">
                    <RDSection TabsData={this.props.data.Tabs} />
                  </div>
                  <div className="right-box">
                    <BuyReport Prices={this.props.data.Price} handleRadioButton={this.handlePriceRadioButton} handleSubmit={this.handlePriceSubmit} value={this.state.value} template={this.props.data.template} />
                    <BundeReport />
                    <RelatedReportSec relatedReports={this.state.relatedReports} />
                  </div>
                </div>
              </div>
            </div>
          </Layout>
        </div>
      </div>
    );
  }
}

export default withRouter(ProductPageTemplate);

// ProductPageTemplate.getInitialProps = async function(context) {
//   const { keyurl } = context.router.query.keyurl;
//   const urlkey = `https://product-page-api.herokuapp.com/api/products/product/${keyurl}`;
//   console.log({ keyurl });
//   const res = await fetch({ urlkey });
//   const data = await res.json();

//   console.log(`Show data fetched. Count: ${data}`);

//   return {
//     data
//   };
// };

// import { withRouter } from "next/router";

// const Page = withRouter(props => (
//   <div>
//     <h1>{props.router.query.title}</h1>
//     <p>This is the blog post content.</p>
//   </div>
// ));

// export default Page;
