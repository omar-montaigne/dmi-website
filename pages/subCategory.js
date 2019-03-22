import React, { Component } from 'react';
import Link from "next/link";
import Navbar from "../components/nav";
import Footer from "../components/footer";
import "../scss/category.scss";

class SubCategoryPage extends Component {

    state = {}

    static async getInitialProps({ req, res, query: { keyurl } }) {
        const url = await fetch(
            `https://product-page-api.herokuapp.com/api/products/getSubCats/${keyurl}`
        );
        const data = await url.json();
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
    render() {

        return (
            <div>
                <div className="category-nav-box">
                    <Navbar searchProps={this.props.searchData} />
                </div>
                <div className="category-items-box">
                    {
                        this.props.data.map((cat, index) => (
                            <div className="category-item">
                                <div className="category-content">
                                    <img src={cat.ImagePath} />
                                    <p>{cat.Product_Title}</p>
                                    <span>starting from <i>{cat.startingPrice}</i></span>
                                </div>
                                <div className="category-button">
                                    <Link as={`/research-reports/${cat.slug}`} href={`/product?keyurl=${cat.slug}`}>
                                        <a><button>View report</button></a>
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <Footer />
            </div >
        );
    }
}

export default SubCategoryPage;