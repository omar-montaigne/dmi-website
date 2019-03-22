import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import NavBar from '../components/nav'
import Footer from '../components/footer'

// import '../scss/terms-conditions.scss'

const TermsConditions = () => {
  const dataM = <span className="strong">DATAM INTELLIGENCE </span>;
  return (
    <div>
      <Head>
        <title>Terms and Conditions</title>
      </Head>
      <div className="navbar">
        <NavBar />
      </div>
      <div id="termscondtions">
        <div className="content-container">
          <h1>TERMS AND CONDITIONS</h1>
          <ul>
            <li>
              {dataM}
              and its affiliates and sponsors are neither responsible nor liable
              for any direct, indirect, incidental, consequential, special,
              exemplary, punitive, or other damages arising out of or relating
              in any way to your use of our research.
            </li>
            <li>
              You agree not to resell any part of the data/report you receive
              from us in a manner that competes with our products and services,
              without the express written permission of {dataM}.
            </li>
            <li>
              {dataM}
              is not responsible for any loss or damage suffered by you directly
              or indirectly, as a result of our delay in/failure to deliver the
              data/report due to circumstances beyond our control, including but
              not limited to natural disasters, labor strikes, war, riot, civil
              disorder, embargo and government regulations or restrictions of
              any and all kinds. Delivery time shall be extended in such
              conditions, allowing us reasonable time to fulfill your
              requirements.
            </li>
            <li>
              A purchase order sent by you shall be construed to be a written
              acceptance of this quotation and offer to sell. However, unless
              accepted in writing by an authorized employee of {dataM}, any terms and conditions contained in any purchase order, acceptance, acknowledgment, or other document that you submit to {dataM} that are inconsistent with, different from, or additional to the terms and conditions of this quotation will be null and void, and the terms and conditions of this quotation shall control in their stead.
            </li>
            <li>

              Due to the format of delivery of our research studies, we cannot
              accept refunds. However, analyst support will be provided to
              address any queries post-purchase.{" "}
            </li>
            <li>

              You may not terminate the contract created upon acceptance of this
              offer and you agree to make the payment in full as laid out in
              this document.{" "}
            </li>
          </ul>
        </div>
      </div>
      <Footer />
      {/* Inline styles for the top header */}
      <style jsx>{`
        .navbar {
          height: 50rem;
          background-image: url('/static/Images/t-c-bg.jpg');
          background-repeat: no-repeat;
          background-position: center bottom;
          background-size: cover;
        }

        #termscondtions {
          display: flex;
          justify-content: center;
        }
        #termscondtions .content-container {
          padding: 6rem 2rem;
          display: flex;
          justify-content: flex-start;
          flex-direction: column;
          min-height: 30rem;
          width: 70%;
        }
        #termscondtions .content-container h1 {
          font-size: 5.4rem;
          color: #f60;
          font-family: 'bebas neue';
          padding-bottom: 6rem;
          text-align: center;
        }
        #termscondtions .content-container ul li {
          font-size: 1.8rem;
          color: #2e2e2e;
          font-family: 'Muli', sans-serif;
          line-height: 140%;
          padding-bottom: 10px;
          text-align: left;
        }
        #termscondtions .content-container ul li span.strong {
          font-weight: 700;
        }
        


      `}</style>
    </div>
  );
};

export default TermsConditions;
