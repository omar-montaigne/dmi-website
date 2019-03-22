import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import NavBar from '../components/nav'
import Footer from '../components/footer'

// import '../scss/thankyou.scss'

const Thankyou = () => {
  return (
    <div>
      <Head>
        <title>Thankyou</title>
        <meta name="viewport" content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />
        <meta charSet="utf-8" />
      </Head>
      <div className="navbar">
        <NavBar />
      </div>
      <div id="thankyou">
        <div className="content-container">
          <h1>THANK YOU!</h1>
          <p>Our dedicated representative has been assigned to you.</p>
          <p>You will be contacted within 3 hours.</p>
          <br />
          <p>
            For further information, please contact: <span className="strong orange-text">sales@datamintelligence.com</span>
          </p>
        </div>
      </div>
      <Footer />
      {/* Inline styles for the top header */}
      <style jsx>{`
        .navbar {
          height: 40rem;
          background-image: url('/static/Images/thankyou-bg.jpg');
          background-repeat: no-repeat;
          background-position: center bottom;
          background-size: cover;
        }

        #thankyou .content-container {
          padding: 6rem 2rem;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-direction: column;
          min-height: 30rem;
        }
        #thankyou .content-container h1 {
          font-size: 5.4rem;
          color: #f60;
          font-family: 'bebas neue';
          padding-bottom: 2rem;
        }
        #thankyou .content-container p {
          font-size: 1.8rem;
          color: #2e2e2e;
          font-family: 'Muli', sans-serif;
          line-height: 140%;
          padding-bottom: 10px;
        }
        #thankyou .content-container p .strong {
          font-weight: 700;
        }
        #thankyou .content-container p .orange-text {
          color: #f60;
        }
        #thankyou .content-container h1, #thankyou .content-container p {
          text-align: center;
        }
        
      `}</style>
    </div>
  );
};

export default Thankyou;
