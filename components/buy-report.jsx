import React, { Component } from "react";
import Link from "next/link";

import "../scss/buy-report.scss";

class BuyReport extends Component {
  state = {
    template: this.props.template,
    Prices: this.props.Prices,

  };

  render() {
    const Price = this.state.Prices;
    return (
      <div className="buy-report-box">
        <h4>Buy This Report</h4>
        {this.state.template === "default" && <form className="buy-report-form" onSubmit={this.props.handleSubmit}>
          <label>
            <span
              className={`radio-icon ${this.props.value === 1 &&
                "active-icon"}`}
            >
              <input
                type="radio"
                name="default-prices"
                onChange={this.handleChange}
                value={`${Price.Single}`}
                checked={this.props.value === 1}
                onChange={this.props.handleRadioButton(1)}
              />
            </span>
            Single User
            <span
              className={`pricetags ${this.props.value === 1 && "active"}`}
            >{`$${Price.Single}`}</span>
          </label>
          <hr />
          <label>
            <span
              className={`radio-icon ${this.props.value === 2 &&
                "active-icon"}`}
            >
              <input
                type="radio"
                name="default-prices"
                onChange={this.handleChange}
                value={`${Price.Multiple}`}
                checked={this.props.value === 2}
                onChange={this.props.handleRadioButton(2)}
              />
            </span>
            Multiple User
            <span
              className={`pricetags ${this.props.value === 2 && "active"}`}
            >{`$${Price.Multiple}`}</span>
          </label>
          <hr />
          <label>
            <span
              className={`radio-icon ${this.props.value === 3 &&
                "active-icon"}`}
            >
              <input
                type="radio"
                name="default-prices"
                onChange={this.handleChange}
                value={`${Price.Enterprise}`}
                checked={this.props.value === 3}
                onChange={this.props.handleRadioButton(3)}
              />
            </span>
            Enterprise User
            <span
              className={`pricetags ${this.props.value === 3 && "active"}`}
            >{`$${Price.Enterprise}`}</span>
          </label>

          <button className="buy-report-btn">ADD TO CART</button>
        </form>}
        {/* template2 offer-20 */}
        {this.state.template === "offer-20%" &&
          <form className="buy-report-form" onSubmit={this.props.handleSubmit}>
            <label>
              <span
                className={`radio-icon ${this.props.value === 1 &&
                  "active-icon"}`}
              >
                <input
                  type="radio"
                  name="default-prices"
                  onChange={this.handleChange}
                  value={`${Price.Single - ((20 * Price.Single) / 100)}`}
                  checked={this.props.value === 1}
                  onChange={this.props.handleRadioButton(1)}
                />
              </span>
              Single User
            <span
                className={`pricetags ${this.props.value === 1 && "active"}`}
              ><strike>{`$${Price.Single}`}</strike>{`$${Price.Single - ((20 * Price.Single) / 100)}`}</span>
            </label>
            <hr />
            <label>
              <span
                className={`radio-icon ${this.props.value === 2 &&
                  "active-icon"}`}
              >
                <input
                  type="radio"
                  name="default-prices"
                  onChange={this.handleChange}
                  value={`${Price.Multiple - ((20 * Price.Multiple) / 100)}`}
                  checked={this.props.value === 2}
                  onChange={this.props.handleRadioButton(2)}
                />
              </span>
              Multiple User
            <span
                className={`pricetags ${this.props.value === 2 && "active"}`}
              ><strike>{`$${Price.Multiple}`}</strike>{`$${Price.Multiple - ((20 * Price.Multiple) / 100)}`}</span>
            </label>
            <hr />
            <label>
              <span
                className={`radio-icon ${this.props.value === 3 &&
                  "active-icon"}`}
              >
                <input
                  type="radio"
                  name="default-prices"
                  onChange={this.handleChange}
                  value={`${Price.Enterprise - ((20 * Price.Enterprise) / 100)}`}
                  checked={this.props.value === 3}
                  onChange={this.props.handleRadioButton(3)}
                />
              </span>
              Enterprise User
            <span
                className={`pricetags ${this.props.value === 3 && "active"}`}
              ><strike>{`$${Price.Enterprise}`}</strike>{`$${Price.Enterprise - ((20 * Price.Enterprise) / 100)}`}</span>
            </label>

            <button className="buy-report-btn">ADD TO CART</button>
          </form>
        }
      </div>
    );
  }
}

export default BuyReport;
