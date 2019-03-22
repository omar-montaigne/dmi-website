import React, { Component } from 'react';
import Router, { withRouter } from "next/router";
import Link from "next/link";

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
            totalPrice: this.props.selectedPrice
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
                totalPrice: this.state.payInfo.totalPrice
            }
        },
            "/checkout"
        )
    }

    render() {
        return (
            <div className="cart">
                <div>

                    <Link as={`/research-reports/${this.state.payInfo.slug}`} href={`/product?keyurl=${this.state.payInfo.slug}`}>
                        <a><p>{this.props.productTitle} - ${this.props.selectedPrice}</p></a>
                    </Link>
                    <label>quantity<input type="number" name="quantity" value={this.state.payInfo.quantity} onChange={this.handleChange} /></label>
                    <p>${this.state.payInfo.totalPrice}</p>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        First Name:
                        <input type="text" name="firstName" value={this.state.payInfo.firstName} onChange={this.handleChange} />
                    </label>
                    <label>
                        Last Name:
                        <input type="text" name="lastName" value={this.state.payInfo.lastName} onChange={this.handleChange} />
                    </label>
                    <label>
                        Company :
                        <input type="text" name="companyName" value={this.state.payInfo.companyName} onChange={this.handleChange} />
                    </label>
                    <label>
                        Country:
                        <input type="text" name="country" value={this.state.payInfo.country} onChange={this.handleChange} />
                    </label>
                    <label>
                        Street Address:
                        <input type="text" name="streetAddress" value={this.state.payInfo.streetAddress} onChange={this.handleChange} />
                    </label>
                    <label>
                        Town/City:
                        <input type="text" name="townCity" value={this.state.payInfo.townCity} onChange={this.handleChange} />
                    </label>
                    <label>
                        State:
                        <input type="text" name="state" value={this.state.payInfo.state} onChange={this.handleChange} />
                    </label>
                    <label>
                        Postal Code:
                        <input type="number" name="postCode" value={this.state.payInfo.postCode} onChange={this.handleChange} />
                    </label>
                    <label>
                        Phone:
                        <input type="number" name="phone" value={this.state.payInfo.phone} onChange={this.handleChange} />
                    </label><label>
                        Email:
                        <input type="email" name="emailAddress" value={this.state.payInfo.emailAddress} onChange={this.handleChange} />
                    </label>
                    <label>
                        Note:
                        <input type="text" name="orderNote" value={this.state.payInfo.orderNote} onChange={this.handleChange} />
                    </label>
                    <button>Checkout</button>
                </form>
                <style jsx>
                    {`
                    .cart{
                        width: 100%;
                        max-width: 135rem;
                    }

                    label{
                        display: block;
                        float: left;
                        width: 50%;
                        font-size: 1.2rem;
                    }
                    input{
                        border: 0.1rem solid #3b3b3b;
                        padding: 1rem;
                        float: right;
                    }
                    button{
                        border: 0.1rem solid red;
                        padding: 1rem;
                        text-align: center;
                    }

                `}
                </style>
            </div>
        );
    }
}

export default withRouter(CartPage);