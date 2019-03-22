import React, { Component } from 'react';

import Link from "next/link";
import Head from "next/head";

import Layout from "../components/layout";
import NavBar from "../components/nav";
import Footer from '../components/footer'

/**
 * ! This file uses Inline Styles
 */

class SuccessPage extends Component {
	state = {}
	render() {
		return (
			<div>
				<div className="navbar">
					<NavBar />
				</div>
				<Head>
					<title>Payment Successful</title>
					<meta name="viewport" content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />
					<meta charSet="utf-8" />
				</Head>
				<div id="paymentsuccess">
					<div className="box">
						<p>Payment Successful!</p>
					</div>
					<div className="continue-shopping">
						{ /**
						* TODO Link Needs to be changed !
						 */ }
						<p>Thankyou for shopping with us! <Link href="#">Continue Shopping..</Link></p>
					</div>
				</div>
				<Footer />
				<style jsx>{`
					#paymentsuccess {
						display: flex;
						flex-direction: column;
						justify-content: flex-start;
						align-items: center;
						min-height: 40rem;
						padding: 70px 0px;
					}
					#paymentsuccess .box {
						background: #A5D6A7;
						color: #498205;
						padding: 80px 20px;
						width: 70%;
						display: flex;
						justify-content: center;
						align-items: center;
						border-radius: 5px;
						border: 4px solid #498205;
					}
					#paymentsuccess .box p {
						font-size: 2rem;
						text-transform: uppercase;
					}
					#paymentsuccess .continue-shopping p {
						padding: 8rem;
						font-size: 2.4rem;
					}
					.navbar {
						height: 40rem;
						background-image: url('/static/Images/thankyou-bg.jpg');
						background-repeat: no-repeat;
						background-position: center bottom;
						background-size: cover;
        	}
				`}</style>
			</div>
		);
	}
}

export default SuccessPage;