import React from "react";
import "../scss/home-counter.scss";
const HomeCounter = () => {
  return (
    <div className="home-counter">
      <div className="counter-container">
        <div className="counter-item">
          <h4>1275</h4>
          <p>Our Report Coverage</p>
        </div>
        <div className="counter-item">
          <h4>61</h4>
          <p>Our Country Research</p>
        </div>
        <div className="counter-item">
          <h4>250</h4>
          <p>Our Expert Rooster Size</p>
        </div>
        <div className="counter-item">
          <h4>15</h4>
          <p>Industries Covered</p>
        </div>
      </div>
    </div>
  );
};

export default HomeCounter;
