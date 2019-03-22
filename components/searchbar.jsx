import React from "react";
import SearchPage from "../components/search"
import Fuse from "fuse.js";
class SearchBar extends React.Component {
  state = {

    searchInput: "",
    searchOutput: [],
  }

  handleChange = (e) => {
    const data = this.props.searchProps;
    console.log("newData", data);
    const options = {
      keys: ['Product_Title']
    }
    let fuse = new Fuse(data, options);
    let fuseData = fuse.search(e.target.value);
    console.log(fuseData);
    this.setState({
      searchInput: e.target.value,
      searchOutput: fuseData
    })
  }
  render() {
    return (
      <div style={{ width: "100%" }}>
        <div className="search-box">
          <span className="border-left" />
          <SearchPage handleChange={this.handleChange} searchInput={this.state.searchInput} searchOutput={this.state.searchOutput} />
          <button>Search</button>
          {this.props.children}
        </div>
        <div className="icon-box">
          <div className="icon-container">
            <div><img src="/static/icons/agriculture.svg" /><span>Agriculture</span></div>
            <div><img src="/static/icons/animal health.svg" /><span>Animal Health</span></div>
            <div><img src="/static/icons/automotive.svg" /><span>Automotive</span></div>
            <div><img src="/static/icons/energy and utilities.svg" /><span>Energy & Utilities</span></div>
            <div><img src="/static/icons/food and beverages.svg" /><span>Food & Beverages</span></div>
            <div><img src="/static/icons/healthcare.svg" /><span>Healthcare Services</span></div>
            <div><img src="/static/icons/information-security.svg" /><span>Information Security</span></div>
            <div><img src="/static/icons/medical devices.svg" /><span>Medical Devices</span></div>
            <div><img src="/static/icons/flask-boiling.svg" /><span>Metals & Mining</span></div>
            <div><img src="/static/icons/petrochemicals.svg" /><span>Petrochemicals</span></div>
            <div><img src="/static/icons/pills.svg" /><span>Pharmaceuticals</span></div>
          </div>
        </div>
      </div>
    );
  }
}

const topwords = [
  "Prostate Cancer",
  "Optical Coherence Tomography",
  "Oats",
  "Defoamers Market",
  "Steel Rods Market",
  "Orange Tang Market",
  "Chips and Pasteries Market"
];

export const TopSearches = () => {
  return (
    <div className="top-searches">
      <h3>Top Searches of the week</h3>
      <div className="top-words clearfix">
        {topwords.map((topword, index) => (
          <p key={index}>{topword}</p>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
