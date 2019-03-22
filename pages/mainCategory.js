import React, { Component } from 'react';
import Router, { withRouter } from "next/router";
import Link from "next/link";
import Navbar from "../components/nav";
import Footer from "../components/footer";
import "../scss/category.scss";

class MainCategoryPage extends Component {

    state = {}

    static async getInitialProps({ req, res, query }) {
        let url;
        const main = query.main;

        if (query.sub !== undefined) {
            const sub = query.sub;
            url = await fetch(
                `https://product-page-api.herokuapp.com/api/products/getSubCats/${sub}`
            );

        }
        else if (query.product !== undefined) {
            const product = query.product;
            url = await fetch(`https://product-page-api.herokuapp.com/api/products/getProductCats/${product}`
            );

        }
        else {
            url = await fetch(
                `https://product-page-api.herokuapp.com/api/products/getMainCats/${main}`
            );
        }


        const productData = await url.json();
        const searchurl = await fetch(
            `https://product-page-api.herokuapp.com/api/category/allData`
        );
        const searchData = await searchurl.json();

        // if (productData === null) {
        //     res.statusCode = 404;
        //     res.set("application/html").send(`<h1>Page not found</h1>
        //   `);
        //     res.end(`${<h1>Page not found</h1>}`);
        //     return;
        // } else {
        //     return { keyurl, productData, searchData };
        // }
        return { query, url, productData, searchData };

    }
    render() {

        return (
            <div>
                <div className="category-nav-box">
                    <Navbar searchProps={this.props.searchData} />
                </div>
                <div className="category-items-box">
                    {
                        this.props.productData.map((cat, index) => (
                            <div className="category-item">
                                <div className="category-content">
                                    <img src={cat.ImagePath} />
                                    <p>{cat.Product_Title}</p>
                                    <span>starting from <i>${cat.Price.Single}</i></span>
                                </div>
                                <div className="category-button">
                                    <Link as={`/research-reports/${cat.slug}`} href={`/product?keyurl=${cat.slug}`}>
                                        <a><button>View report</button></a>
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                    {this.props.productData.length === 0 && <h1>No Products Found</h1>}
                </div>
                <Footer />
            </div >
        );
    }
}

export default withRouter(MainCategoryPage);