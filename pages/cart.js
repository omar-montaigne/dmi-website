import React, { Component } from 'react';
import Router, { withRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import axios from "axios";
import Layout from "../components/layout";
import NavBar from "../components/nav";
import Footer from '../components/footer'
// import "../scss/cart.scss";


class CartPage extends Component {
	state = {
		payInfo: {
			slug: this.props.slug,
			firstName: "",
			lastName: "",
			companyName: "",
			country: "",
			streetAddress: "",
			townCity: "",
			state: "",
			postCode: "",
			phone: "",
			emailAddress: "",
			orderNote: "",
			itemName: this.props.productTitle,
			itemPrice: this.props.selectedPrice,
			sku: "DMM123",
			quantity: 1,
			totalPrice: this.props.selectedPrice,
			imagePath: this.props.imagePath
		}
	}

	static async getInitialProps({ req, res, query }) {
		return query
	}

	// componentDidUpdate(oldProps) {
	//     const newProps = this.props
	//     if (oldProps !== newProps) {
	//         this.setState({
	//             slug: this.props.slug,
	//             // firstName: "",
	//             // lastName: "",
	//             // companyName: "",
	//             // country: "",
	//             // streetAddress: "",
	//             // townCity: "",
	//             // state: "",
	//             // postCode: "",
	//             // phone: "",
	//             // emailAddress: "",
	//             // orderNote: "",
	//             itemName: this.props.productTitle,
	//             itemPrice: this.props.selectedPrice,
	//             sku: "DMM123",
	//             quantity: 1,
	//             totalPrice: this.props.selectedPrice
	//         });
	//     }
	// }

	handleChange = (e) => {
		const payInfo = { ...this.state.payInfo };
		payInfo[e.target.name] = e.target.value;
		if (e.target.name === "quantity") {
			payInfo["totalPrice"] = payInfo["itemPrice"] * e.target.value;
		}
		this.setState({
			payInfo
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
		Router.push({
			pathname: "/checkout",
			query: {
				slug: this.state.payInfo.slug,
				firstName: this.state.payInfo.firstName,
				lastName: this.state.payInfo.lastName,
				companyName: this.state.payInfo.companyName,
				country: this.state.payInfo.country,
				streetAddress: this.state.payInfo.streetAddress,
				townCity: this.state.payInfo.townCity,
				state: this.state.payInfo.state,
				postCode: this.state.payInfo.postCode,
				phone: this.state.payInfo.phone,
				emailAddress: this.state.payInfo.emailAddress,
				orderNote: this.state.payInfo.orderNote,
				itemName: this.state.payInfo.itemName,
				itemPrice: this.state.payInfo.itemPrice,
				sku: this.state.payInfo.sku,
				quantity: this.state.payInfo.quantity,
				totalPrice: this.state.payInfo.totalPrice,
				imagePath: this.state.payInfo.imagePath
			}
		},
			"/checkout"
		)
	}

	render() {
		return (
			<div>
				<Head>
					<meta name="viewport" content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />
					<meta charSet="utf-8" />
				</Head>
				<div className="navbar">
					<NavBar />
				</div>
				<div id="cart">
					{this.props.slug === undefined && this.props.slug !== "" && <h1>There are no items in your CART!</h1>}
					{this.props.slug !== undefined && <React.Fragment>
						<h1>CART</h1>

						{ /**
						* * Cart Section: Items added to cart will appear here 
					 */ }
						<div className="cart-section">
							{ /**
							* ! Ahmed's Code : Commented out on his request 
						 */ }
							{/* <Link as={`/research-reports/${this.state.payInfo.slug}`} href={`/product?keyurl=${this.state.payInfo.slug}`}>
							<a><p>{this.props.productTitle} - ${this.props.selectedPrice}</p></a>
						</Link>
						<label>quantity<input type="number" name="quantity" value={this.state.payInfo.quantity} onChange={this.handleChange} /></label>
						<p>${this.state.payInfo.totalPrice}</p> */}
							{/* Product list start from here */}
							{/* Product 1 */}
							<div className="product-container">
								{/* Product Image and title */}
								<div className="product-meta">
									<img src={this.props.imagePath} alt="" />
									<Link as={`/research-reports/${this.state.payInfo.slug}`} href={`/product?keyurl=${this.state.payInfo.slug}`}>
										<a><h4>{this.state.payInfo.itemName}</h4></a></Link>
								</div>
								{/* Product Price */}
								<div className="price-container">
									<div className="form-group">
										<label>Quantity</label>
										<input type="number" name="quantity" value={this.state.payInfo.quantity} onChange={this.handleChange} /> x ${this.state.payInfo.itemPrice}
									</div>
									<div className="price">
										<h4>${this.state.payInfo.totalPrice}</h4>
									</div>
								</div>
							</div>



						</div>

						{/* Form Section: A form that takes billing/addr details of purchaser */}
						{/* Every Label + Input pair lives inside a form-group div that has a width of 50% */}
						<div className="form-section">
							<h2>Billing Details</h2>
							<form onSubmit={this.handleSubmit}>
								<div className="form-group">
									<label>
										First Name:
							</label>
									<input type="text" name="firstName" value={this.state.payInfo.firstName} onChange={this.handleChange} />
								</div>
								<div className="form-group">
									<label>
										Last Name:
							</label>
									<input type="text" name="lastName" value={this.state.payInfo.lastName} onChange={this.handleChange} />
								</div>
								<div className="form-group">
									<label>
										Company :
							</label>
									<input type="text" name="companyName" value={this.state.payInfo.companyName} onChange={this.handleChange} />
								</div>
								<div className="form-group">
									<label>
										Country:
							</label>
									<input type="text" name="country" value={this.state.payInfo.country} onChange={this.handleChange} />
								</div>
								<div className="form-group">
									<label>
										Street Address:
							</label>
									<input type="text" name="streetAddress" value={this.state.payInfo.streetAddress} onChange={this.handleChange} />
								</div>
								<div className="form-group">
									<label>
										Town/City:
							</label>
									<input type="text" name="townCity" value={this.state.payInfo.townCity} onChange={this.handleChange} />
								</div>
								<div className="form-group">
									<label>
										State:
							</label>
									<input type="text" name="state" value={this.state.payInfo.state} onChange={this.handleChange} />
								</div>
								<div className="form-group">
									<label>
										Postal Code:
							</label>
									<input type="number" name="postCode" value={this.state.payInfo.postCode} onChange={this.handleChange} />
								</div>
								<div className="form-group">
									<label>
										Phone:
							</label>
									<input type="number" name="phone" value={this.state.payInfo.phone} onChange={this.handleChange} />
								</div>
								<div className="form-group">
									<label>
										Email:
							</label>
									<input type="email" name="emailAddress" value={this.state.payInfo.emailAddress} onChange={this.handleChange} />
								</div>
								<div className="form-group-100 ">
									<label>
										Note:
							</label>
									<input type="text" name="orderNote" value={this.state.payInfo.orderNote} onChange={this.handleChange} />
								</div>
								<div className="form-group-100">
									<button>Checkout</button>
								</div>
							</form>
						</div>
					</React.Fragment>
					}
				</div>
				<Footer />
				<style jsx>{`
        .navbar {
          height: 40rem;
          background-image: url('/static/Images/join-us-bg.jpg');
          background-repeat: no-repeat;
          background-position: center bottom;
          background-size: cover;
		}
		
		#cart {
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
			padding: 80px 0px;
		  }
		  #cart h1 {
			color: #f60;
			font-family: 'bebas neue';
			font-size: 5.4rem;
			line-height: 65px;
			letter-spacing: -0.07px;
			text-align: center;
			padding-bottom: 40px;
			width: 100%;
		  }
		  #cart .cart-section, #cart .form-section {
			width: 50%;
			flex: 1;
		  }
		  /* Cart Section Styling */
		  #cart .cart-section {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-end;
			max-width: 500px;
			padding: 20px 40px;
			box-sizing: border-box;
			border-right: 1px solid #ccc;
			overflow-y: scroll;
		  }
		  #cart .cart-section > div.product-container {
			margin: 10px 0px;
		  }
		  #cart .cart-section .product-container {
			width: 100%;
			background: #fff;
			border: 1px solid #ccc;
			border-radius: 5px;
			box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
			display: flex;
			min-height: 120px;
			padding: 10px;
			box-sizing: border-box;
		  }
		  #cart .cart-section .product-container .product-meta {
			flex: 3;
			height: 100px;
			display: flex;
			justify-content: space-evenly;
		  }
		  #cart .cart-section .product-container .product-meta h4 {
			font-size: 1.4rem;
			padding-left: 5px;
		  }
		  #cart .cart-section .product-container .product-meta img {
			max-height: 100%;
			padding-right: 5px;
		  }
		  #cart .cart-section .product-container .price-container {
			padding: 0px 10px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: flex-end;
			flex: 1;
		  }
		  #cart .cart-section .product-container .price-container .form-group {
			display: flex;
			flex-direction: column;
			box-sizing: border-box;
		  }
		  #cart .cart-section .product-container .price-container .form-group label {
			font-weight: bold;
			display: block;
			color: #2e2e2e;
		  }
		  #cart .cart-section .product-container .price-container .form-group input {
			background: #e8e8e8;
			width: 100%;
			max-height: 30px;
			padding: 10px 0px;
			padding-left: 10px;
			box-sizing: border-box;
		  }
		  #cart .cart-section .product-container .price-container h4 {
			width: 100%;
			font-size: 1.8rem;
		  }
		  /* Form Section Styling */
		  #cart .form-section {
			padding: 20px 40px;
			max-width: 420px;
		  }
		  #cart .form-section h2 {
			text-align: center;
			font-size: 2.5rem;
			padding-bottom: 20px;
		  }
		  #cart .form-section form {
			display: flex;
			justify-content: center;
			flex-direction: row;
			flex-wrap: wrap;
			font-family: 'Muli', sans-serif;
		  }
		  #cart .form-section form .form-group {
			width: 50%;
			display: flex;
			flex-direction: column;
			box-sizing: border-box;
		  }
		  #cart .form-section form .form-group-100 {
			width: 100%;
			display: flex;
			flex-direction: column;
			box-sizing: border-box;
		  }
		  #cart .form-section form label {
			font-weight: bold;
			display: block;
			color: #2e2e2e;
		  }
		  #cart .form-section form input {
			background: #e8e8e8;
			width: 100%;
			padding: 10px 0px;
			padding-left: 10px;
			margin-top: 5px;
			margin-bottom: 20px;
			box-sizing: border-box;
		  }
		  #cart .form-section form button {
			background: #2e2e2e;
			padding: 10px 20px;
			color: #fff;
			font-family: 'Muli', sans-serif;
		  }
		  #cart .form-section form > div.form-group:nth-child(odd) {
			padding-right: 20px;
		  }
		  #cart .form-section form > div.form-group:nth-child(even) {
			padding-left: 20px;
		  }
		  /** 
		   * !The below styles are for mobile and tablet
		   */
		  /* Mobile */
		  @media (min-width: 320px) and (max-width: 880px) {
			#cart {
			  display: flex;
			  flex-direction: column;
			}
			#cart h1 {
			  padding-bottom: 20px;
			}
			#cart .cart-section, #cart .form-section {
			  width: 100%;
			}
			#cart .cart-section {
			  display: flex;
			  flex-direction: column;
			  align-items: center;
			  border: none;
			  border-bottom: 1px solid #ccc;
			  max-width: 100%;
			}
			#cart .cart-section .product-container {
			  display: flex;
			  flex-direction: column;
			  justify-content: center;
			  align-items: center;
			  width: 100%;
			  min-height: 300px;
			  padding: 10px;
			  box-sizing: border-box;
			}
			#cart .cart-section > div.product-container {
			  margin: 10px 0px;
			}
			#cart .cart-section .product-container .product-meta {
			  display: flex;
			  flex-direction: column;
			  justify-content: center;
			  align-items: center;
			}
			#cart .cart-section .product-container .product-meta img {
			  margin-bottom: 10px;
			}
			#cart .cart-section .product-container .product-meta h4 {
			  text-align: center;
			}
			#cart .cart-section .product-container .price-container {
			  padding: 0px;
			  height: auto;
			  width: 100%;
			  display: flex;
			  flex-direction: column;
			  justify-content: center;
			  align-items: center;
			  flex: 1;
			}
			#cart .cart-section .product-container .price-container label {
			  margin-bottom: 6px;
			}
			#cart .cart-section .product-container .price-container input {
			  margin-bottom: 10px;
			}
			#cart .form-section {
			  box-sizing: border-box;
			  max-width: 100%;
			  display: flex;
			  justify-content: center;
			  flex-wrap: wrap;
			}
			#cart .form-section form {
			  display: flex;
			  justify-content: center;
			  max-width: 80%;
			  margin: 0px;
			}
			#cart .form-section form .form-group {
			  width: 100%;
			}
			#cart .form-section form > div.form-group:nth-child(odd) {
			  padding-right: 0px;
			}
			#cart .form-section form > div.form-group:nth-child(even) {
			  padding-left: 0px;
			}
		  }
		  
      `}</style>
			</div>
		);
	}
}

export default withRouter(CartPage);