import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
const Thankyou = () => {
  return (
    <div>
      <Head>
        <title>Thankyou</title>
      </Head>
      <Layout>
        <h1>THANK YOU!</h1>
        <p>Our dedicated representative has been assigned to you.</p>
        <p>You will be contacted with in 3 hours.</p>
        <br />
        <p>
          For further information, <b>Contact: sales@datamintelligence.com</b>
        </p>
      </Layout>
    </div>
  );
};

export default Thankyou;
