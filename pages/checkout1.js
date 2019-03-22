import React from "react";
import axios from "axios";
import Router from "next/router";

class Checkout extends React.Component {
  state = {
    slug: this.props.slug,
    firstName: this.props.firstName,
    lastName: this.props.lastName,
    companyName: this.props.companyName,
    country: this.props.country,
    streetAddress: this.props.streetAddress,
    townCity: this.props.townCity,
    state: this.props.state,
    postCode: this.props.postCode,
    phone: this.props.phone,
    emailAddress: this.props.emailAddress,
    orderNote: this.props.orderNote,
    itemName: this.props.itemName,
    itemPrice: this.props.itemPrice,
    sku: this.props.sku,
    quantity: this.props.quantity,
    totalPrice: this.props.totalPrice,
  };
  static async getInitialProps({ req, res, query }) {
    return query
  }
  // handleChangeName = e => {
  //   this.setState({
  //     name: e.target.value
  //   });
  // };

  handleClick = async e => {
    e.preventDefault();
    const mystate = this.state;
    console.log(mystate);
    try {
      const data = await axios.post(
        "https://product-page-api.herokuapp.com/api/payments/pay",
        mystate
        // {
        //   headers: {
        //     "Access-Control-Allow-Origin":
        //       "https://datam-website-test.herokuapp.com",
        //     "Access-Control-Allow-Credentials": true,
        //     "Access-Control-Allow-Methods": "GET ,POST, PUT, DELETE,OPTIONS",
        //     "Access-Control-Allow-Headers": "*",
        //     "Access-Control-Max-Age": 3600
        //   }
        // }
      );
      console.log(data);
      Router.push(data.data);
    } catch (error) {
      console.log("Error", error);
    }
    // fetch("https://product-page-api.herokuapp.com/api/payments/pay", {
    //   method: "POST",
    //   body: NAme
    // });
    // console.log(data);
    // console.log(data.request.responseURL);
    // Router.push(data.request.responseURL);
  };
  render() {
    return (
      <div>
        {/* <input
          name="name"
          type="text"
          value={this.state.name}
          onChange={this.handleChangeName}
        /> */}
        {/* <input type="submit" value="Buy Now" /> */}
        <button onClick={this.handleClick} style={{ cursor: "pointer" }}>
          Buy
        </button>
      </div>
    );
  }
}

export default Checkout;
