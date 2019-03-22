import React, { Component } from "react";
import NavBar from "../components/nav";
import Footer from "../components/footer";

class Layout extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar searchProps={this.props.searchProps} />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
