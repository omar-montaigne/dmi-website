import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import NavBar from '../components/nav'
import Footer from '../components/footer'

// import '../scss/privacy-policy.scss'

const PrivacyPage = () => {
  return (
    <div>
      <Head>
        <title>Privacy Page</title>
        <meta name="viewport" content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />
        <meta charSet="utf-8" />
      </Head>
      <div className="navbar">
        <NavBar />
      </div>
      <div id="privacypolicy">
        <div className="content-container">
          <h1>PRIVACY POLICY</h1>
          <h4>
            <b>1. Information Collection</b>
          </h4>
          <p>
            <b>1.1 Information Collects.</b>
            <span>
              DataM Intelligence may collect information that identifies Users
              when accessing the Website (collectively, "Information"), which
              includes user names, addresses, phone numbers, birth dates, billing
              and delivery informations, email addresses, credit card information,
              and other financial account information ("Personally Identifiable
              Information"), other information Users provide to DataM Intelligence
              but that does not identify Users personally, such as records of User
              visits, and information Users submit when using the Website,
              information from third parties, and traffic and usage information
              generated from User visits to the website, including traffic data
              and the type of device that Users use to access the Website.
          </span>
          </p>
          <p>
            <b>1.2 Tracking Technologies Uses</b>
            <span>
              . DataM Intelligence may use a variety of technologies to collect
              Information, including cookies, flash cookies, general log
              information, and referral information from third party websites.
          </span>
          </p>

          <h4>
            <b>2. How DataM Intelligence Uses Information</b>
          </h4>
          <p>We may use the Information it collects to</p>
          <p>
            <span>
              (i) provide, operate, maintain, improve, and promote, the Website,
          </span>
          </p>
          <p>
            <span>
              (ii) process and complete transactions, and send Users related
              information, including purchase confirmations and invoices,
          </span>
          </p>
          <p>
            <span>
              (iii) send transactional messages, including responding to User
              comments, questions, and requests, providing User service and
              support, and sending Users technical notices, updates, security
              alerts, and support and administrative messages,
          </span>
          </p>
          <p>
            <span>
              (iv) send promotional communications, such as providing Users with
              information about services, features, newsletters, offers,
              promotions, contests, events, and sending updates about User team
              and chat rooms,
          </span>
          </p>
          <p>
            <span>
              (v) monitor and analyze trends, usage, and activities in connection
              with the Website and for marketing or advertising purposes,
          </span>
          </p>
          <p>
            <span>
              (vi) investigate and prevent fraudulent transactions, unauthorized
              access to the Website, and other illegal activities,
          </span>
          </p>
          <p>
            <span>
              (vii) personalize the Website content, features or advertisements,
              and
          </span>
          </p>
          <p>
            <span>
              (viii) enable Users to share content with other Users they
              designate.
          </span>
          </p>

          <h4>
            <b>3. Information Advertising and Sharing</b>
          </h4>
          <p>
            <b>3.1 Advertising and Cookies</b>
          </p>
          <p>
            <b>Third Party Advertising and Cookies</b>
            <span>
              . DataM Intelligence may permit third party advertising partners to
              deliver ads to Users and use cookies on the Website.
          </span>
          </p>
          <p>
            <b>Policy Does Not Cover Third Party Advertisers</b>
            <span>
              . This policy does not cover third party advertising partners' use
              of cookies, which is subject to the third party advertising
              partners' own privacy policies.
          </span>
          </p>
          <p>
            <b>Use of Cookies</b>
            <span>
              . DataM Intelligence may, and may permit third party advertising
              partners, to use cookies to
          </span>
          </p>
          <p>
            <span>(i) recognize a User's computers,</span>
          </p>
          <p>
            <span>(ii) send online advertisements to Users, and </span>
          </p>
          <p>
            <span>
              (iii) compile Information about a User's, and other's, use of its
              computer.
          </span>
          </p>
          <p>
            <b>3.2 Service Providers</b>
            <span>
              . DataM Intelligence may share Information with third party service
              providers it employs to perform functions and provide services for
              DataM Intelligence and the Website, subject to the terms of this
              policy, and only to the extent necessary
          </span>
          </p>
          <p>
            <span>(i) to process payments,</span>
          </p>
          <p>
            <span>
              (ii) to prevent, detect, and investigate fraud or other prohibited
              activities,
          </span>
          </p>
          <p>
            <span>
              (iii) to facilitate dispute resolution, such as chargebacks or
              refunds, and
          </span>
          </p>
          <p>
            <span>
              (iv) for other purposes associated with the acceptance of credit or
              debit cards.
          </span>
          </p>
          <p>
            <b>3.3 Credit and Debit Card Information</b>
            <span>
              . DataM Intelligence may share User credit or debit card numbers
              with third party payment services providers or card networks, only
              to the extent necessary to monitor card transactions at
              participating merchants and track redemption activity for the
              purposes of providing card-linked services.
          </span>
          </p>

          <h4>
            <b>4. No Security Guarantees</b>
            <span>.</span>
          </h4>
          <p>
            <span>
              DataM Intelligence does not guarantee against all unauthorised
              disclosure, alteration, or destruction or Information.
          </span>
          </p>

          <h4>
            <b>5. Changes to Policy</b>
          </h4>
          <p>
            <b>5.1 Discretion to Make Changes</b>
            <span>
              . DataM Intelligence may change this policy at its discretion.{" "}
            </span>
          </p>
          <p>
            <b>5.2 Notice of Changes</b>
            <span>
              . DataM Intelligence shall provide reasonable notice of any such
              changes on the Website.
          </span>
          </p>
          <p>
            <b>5.3 Acceptance of</b> <b>Changes</b>
            <span>.</span>{" "}
            <span>
              Users' continued use of the Website after notice of the changes has
              been posted to the Website will be deemed acceptance of the changes,
              if
          </span>
          </p>
          <p>
            <span>
              (i) a reasonable time has passed in which Users could review the
              changes, but
          </span>
          </p>
          <p>
            <span>
              (ii) regardless as to whether the User actually did review the
              changes.
          </span>
          </p>
        </div>
      </div>
      <Footer />
      {/* Inline styles for the top header */}
      <style jsx>{`
        .navbar {
          height: 40rem;
          background-image: url('/static/Images/privacy-policy-bg.jpg');
          background-repeat: no-repeat;
          background-position: center bottom;
          background-size: cover;
        }

        #privacypolicy {
          display: flex;
          justify-content: center;
        }
        #privacypolicy .content-container {
          padding: 6rem 2rem;
          display: flex;
          justify-content: flex-start;
          flex-direction: column;
          min-height: 30rem;
          width: 70%;
        }
        #privacypolicy .content-container h1 {
          font-size: 5.4rem;
          color: #f60;
          font-family: 'bebas neue';
          padding-bottom: 6rem;
          text-align: center;
        }
        #privacypolicy .content-container h4 {
          font-size: 2.4rem;
          color: #2e2e2e;
          font-family: 'Muli', sans-serif;
          padding-bottom: 1rem;
          text-align: left;
        }
        #privacypolicy .content-container p {
          font-size: 1.8rem;
          color: #2e2e2e;
          font-family: 'Muli', sans-serif;
          line-height: 140%;
          padding-bottom: 10px;
          text-align: left;
        }
        

      `}</style>
    </div>
  );
};

export default PrivacyPage;
