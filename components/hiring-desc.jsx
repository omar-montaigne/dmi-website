import React from "react";
import "../scss/hiring-desc.scss";
const HiringDesc = () => {
  return (
    <div className="hiring-section">
      <div className="hiring-container">
        <div className="hiring-content ">
          <h3>GOING WIRELESS WITH YOUR HEADPHONES</h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. <br />
            <br />
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy. Various versions
            have evolved over the years, sometimes by accident, sometimes on
            purpose (injected humour and the like).
          </p>
          <button>APPLY NOW</button>
        </div>
      </div>
      <div className="hiring-title">
        <h2>WE ARE HIRING</h2>
      </div>
    </div>
  );
};

export default HiringDesc;
