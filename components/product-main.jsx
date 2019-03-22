import React, { Component } from "react";
import DownloadSample from "./download-sample";
import "../scss/product-main-sec.scss";

// let countProps = this.props.SKU.count;
// let precountValue = preCounter(countProps);


// function preCounter(countProps) {
//   let countLength = countProps.length;
//   let precountValue = "";
//   for (var i = countLength; i < 4; i++) {
//     precountValue += "0";
//   }
//   return precountValue

// }

class ProductTitleSection extends Component {
  state = {
    height: 0,
    countProps: this.props.SKU.count,
    precountValue: ""
  };

  handleOpen = () => {
    this.setState({
      height: "100rem"
    });
  };

  handleClose = () => {
    this.setState({
      height: 0
    });
  };

  componentDidMount() {
    let countLength = this.state.countProps;
    console.log(countLength);
    let precount = ""
    for (var i = countLength; i < 4; i++) {
      precount += "0";
    }
    this.setState({
      precountValue: precount
    })

  }

  render() {
    return (
      <React.Fragment>
        <div className="clearfix product-main-sec-box container">
          <div className="product-img-box">
            {/* <img src={this.props.ImagePath} width="200px" /> */}
            <img src={this.props.ImagePath} />
          </div>
          <div className="product-title-box">
            <p className="Date-and-Format">
              SKU: D{this.props.SKU.category}{this.state.precountValue}{this.props.SKU.count} | Published On: {this.props.PublishedDate} | Available Formats{" "}
              <img src="/static/Images/available-formats.png" />{" "}
            </p>
            <h1>{this.props.Title}</h1>
          </div>
          <div className="product-button-box">
            <button onClick={this.handleOpen} className="download-sample-btn">
              Download Sample
            </button>
            <button className="product-compass-btn">
              {" "}
              <img src="/static/Images/compass logo-white.png" />
            </button>
          </div>
        </div>
        <div className="product-form-box">
          <DownloadSample
            onClose={this.handleClose}
            height={this.state.height}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default ProductTitleSection;
