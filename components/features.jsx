import React from "react";
import Link from "next/link"
import "../scss/features.scss";

const FeaturesDMI = () => {
  return (
    <div className="clearfix features-box ">
      <div className="features-ready ">
        <div
          className="
  section-left "
        >
          <img
            src="/static/icons/quote.png"
            style={{ width: "5%", marginBottom: "1.4rem" }}
          />
          <img src="/static/Images/dmi-logo 2.png" />
          <p>
            <span style={{ color: "rgb(221, 96, 3)", fontWeight: 700 }}>
              DataM Intelligence
            </span>{" "}
            4Market Research is a market intelligence platform which gives
            access to syndicated, customised reports to its clients at one
            place. As a firm with rich experience in research and consulting
            across multiple domains we are one stop solution that will cater to
            the needs of clients in key business areas.
          </p>
          <Link href="/about"><a>Know More</a></Link>
        </div>
        <div className="section-right">
          {/* <div className="right-section-top"> */}
          <div className="feature-item feature-dark">
            <img src="/static/icons/usher-man-with-tie.svg" />
            <h4>We Believe you’re Important</h4>
            <p>
              And So are the reports to you, thus personalising them to your
              need and benefit
            </p>
          </div>
          <div className="feature-item feature-light">
            <img src="/static/icons/light-bulb.svg" />
            <h4>Doing it the Smart Way</h4>
            <p>
              Our Strategic-Centric approach makes us the right partner for your
              business plan!
            </p>
            {/* </div> */}
          </div>
          {/* <div className="right-section-bottom"> */}
          <div className="feature-item feature-light">
            <img src="/static/icons/first-prize-trophy.svg" />
            <h4>We give you Our Best</h4>
            <p>
              Distinct Data, Supporting statistics, Efficient Research,
              Increased Coverage, Experienced Personnel, Easy access and More!
            </p>
          </div>
          <div className="feature-item feature-dark">
            <img src="/static/icons/group.svg" />
            <h4> Omnipresent for you</h4>
            <p>
              24*7 Analyst support to keep your journey to the market smooth and
              Hurdle-free.
            </p>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesDMI;
