import React, { Component } from 'react';
import Link from "next/link"


class SearchPage extends Component {
    // state = {
    //     searchInput: "",
    //     searchOutput: [],
    // }

    // static async getInitialProps() {
    //     const url = await fetch(
    //         `https://product-page-api.herokuapp.com/api/category/allData`
    //     );
    //     const data = await url.json();

    //     const newdata = {
    //         data: data
    //     }
    //     return newdata
    // }

    // handleChange = (e) => {
    //     const data = this.props.data;

    //     const options = {
    //         keys: ['Product_Title']
    //     }
    //     let fuse = new Fuse(data, options);
    //     const fuseData = fuse.search(e.target.value);
    //     console.log(fuseData);
    //     this.setState({
    //         searchInput: e.target.value,
    //         searchOutput: fuseData
    //     })
    // }

    render() {
        const data = this.props.searchOutput
        return (
            <div className="main-search-block">
                <input className="search-input" type="search" value={this.props.searchInput} onChange={(e) => this.props.handleChange(e)} placeholder="Start typing..." />
                <div className="search-result">
                    {
                        data.slice(0, 9).map((s, index) => (

                            <Link as={`/research-reports/${s.slug}`} href={`/product?keyurl=${s.slug}`}>
                                <a><img src={s.ImagePath} />
                                    <p key={index}>{s.Product_Title}</p></a></Link>
                        ))
                    }
                </div>
            </div >
        );
    }
}

export default SearchPage;