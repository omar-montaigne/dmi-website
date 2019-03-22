import React from "react";
import axios from "axios";
import Router from "next/router";
import Head from "next/head";

import Layout from "../components/layout";
import NavBar from "../components/nav";
import Footer from '../components/footer'

// import "../scss/checkout.scss";

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
        { /**
        * *commented out below code as per Ahmed's request
         */ }
        {/* <input
          name="name"
          type="text"
          value={this.state.name}
          onChange={this.handleChangeName}
        /> */}
        {/* <input type="submit" value="Buy Now" /> */}
        {/* <button onClick={this.handleClick} style={{ cursor: "pointer" }}>
          Buy
        </button> */}
        <Head>
          <meta name="viewport" content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />
          <meta charSet="utf-8" />
        </Head>
        <div className="navbar">
          <NavBar />
        </div>
        <Head>
          <title>Checkout</title>
        </Head>
        <div id="checkout">
          {this.props.slug === undefined && this.props.slug !== "" && <center><h1>OOPS!</h1> <h2>No items available to make a purchase</h2> <h2>Please add items to CHECKOUT</h2></center>}
          {this.props.slug !== undefined && <React.Fragment>
            <h1>CHECKOUT</h1>
            <table className="table-container">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="product">
                      <img src={this.props.imagePath} alt="" />
                      <h4>{this.state.itemName}</h4>
                    </div>
                  </td>
                  <td>{this.state.quantity}</td>
                  <td>${this.state.itemPrice}</td>
                </tr>
                <tr className="summary-row">
                  <td></td>
                  <td></td>
                  <td className="summary">
                    <p>Subtotal: ${this.state.totalPrice}</p>
                    <hr />
                    <p className="total">Total: ${this.state.totalPrice}</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="paypal">
              <div className="paypal-checkbox">
                <input type="radio" name="paywithpaypal" defaultChecked />
                <label>Pay with PayPal</label>
                <img src="../static/Images/paypal.png" alt="" width="150px" style={{ float: "right" }} />
              </div>
              <div className="paypal-box">
                Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.
            </div>
            </div>
            <div className="buttons">
              <button className="back">Back to Cart</button>
              <button className="proceed" onClick={this.handleClick}>Proceed to payment</button>
            </div>
          </React.Fragment>}
        </div>
        <Footer />
        <style jsx>{`
        .navbar {
          height: 50rem;
          background-image: url('/static/Images/join-us-bg.jpg');
          background-repeat: no-repeat;
          background-position: center bottom;
          background-size: cover;
        }

        #checkout {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding: 80px 0px;
        }
        #checkout h1 {
          color: #f60;
          font-family: 'bebas neue';
          font-size: 5.4rem;
          line-height: 65px;
          letter-spacing: -0.07px;
          text-align: center;
          padding-bottom: 40px;
          width: 100%;
        }
        #checkout table {
          width: 90%;
          border-collapse: collapse;
          border: 2px solid #ccc;
          border-radius: 10px;
        }
        #checkout table .product {
          display: flex;
          align-items: flex-end;
          height: 100px;
        }
        #checkout table .product img {
          height: 100%;
          padding-right: 10px;
        }
        #checkout table .product h4 {
          font-size: 2rem;
          padding-left: 10px;
          text-align: center;
        }
        #checkout table thead tr {
          background: #b6c6c9;
          color: white;
          font-size: 2.4rem;
          text-transform: uppercase;
        }
        #checkout table thead tr th {
          padding: 20px;
        }
        #checkout table tbody tr {
          border: 1px solid #ccc;
          border-radius: 10px;
          font-size: 1.6rem;
        }
        #checkout table tbody tr td {
          padding: 20px;
          min-width: 60px;
          border: 1px solid #ccc;
          border-radius: 10px;
          vertical-align: center;
        }
        #checkout table tbody .summary-row {
          height: 120px;
        }
        #checkout table tbody .summary-row td {
          border: none;
        }
        #checkout table tbody .summary-row .summary {
          text-align: right;
          font-size: 1.6rem;
          font-weight: bold;
        }
        #checkout table tbody .summary-row .summary p {
          font-size: 2rem;
          padding: 10px 0px;
        }
        #checkout table tbody .summary-row .summary p.total {
          font-size: 2.8rem;
          color: #f60;
        }
        #checkout .paypal {
          margin: 40px 0px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 90%;
          height: 140px;
        }
        #checkout .paypal label {
          font-size: 1.4rem;
          padding-left: 4px;
        }
        #checkout .paypal .paypal-box {
          background: #a3e7f0;
          color: #3c3950;
          font-size: 1.6rem;
          height: 100px;
          display: flex;
          align-items: center;
          padding: 0px 30px;
          border-radius: 5px;
        }
        #checkout .buttons {
          display: flex;
          justify-content: space-between;
          width: 90%;
        }
        #checkout .buttons button {
          border: 2px solid #343434;
          border-radius: 5px;
          padding: 14px 20px;
          font-weight: bold;
          box-sizing: border-box;
          transition: 0.4s all;
        }
        #checkout .buttons button.back:hover {
          background: #343434;
          color: #fff;
          transition: 0.4s all;
        }
        #checkout .buttons button.proceed {
          background: #498205;
          border: 2px solid #a5d6a7;
          color: #fff;
        }
        #checkout .buttons button.proceed:hover {
          filter: brightness(80%);
          border: 2px solid transparent;
          transition: 0.4s all;
        }
        /** 
         * !The below styles are for mobile and tablet
         */
        /* Mobile */
        @media (min-width: 320px) and (max-width: 880px) {
          #checkout table thead tr {
            font-size: 1.4rem;
          }
          #checkout table .product {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          #checkout table .product img {
            height: 60%;
            padding-right: 0px;
          }
          #checkout table .product h4 {
            font-size: 1.2rem;
            padding-top: 4px;
          }
          #checkout table tbody tr {
            border: 1px solid #ccc;
            border-radius: 10px;
            font-size: 1.2rem;
          }
          #checkout table tbody tr td {
            padding: 10px;
            text-align: center;
          }
        }
        
        

      `}</style>
      </div>
    );
  }
}

export default Checkout;
