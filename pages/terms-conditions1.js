import React from "react";
import Head from "next/head";
import Layout from "../components/layout";

const TermsConditions = () => {
  return (
    <div>
      <Head>
        <title>Terms and Conditions</title>
      </Head>
      <Layout>
        <h1>TERMS AND CONDITIONS</h1>
        <ul>
          <li>
            <b>DATAM INTELLIGENCE </b>
            <span>
              and its affiliates and sponsors are neither responsible nor liable
              for any direct, indirect, incidental, consequential, special,
              exemplary, punitive, or other damages arising out of or relating
              in any way to your use of our research.
            </span>
          </li>
          <li>
            <span>
              You agree not to resell any part of the data/report you receive
              from us in a manner that competes with our products and services,
              without the express written permission of{" "}
            </span>
            <b>DATAM INTELLIGENCE</b>
            <span>. </span>
          </li>
          <li>
            <b>DATAM INTELLIGENCE </b>
            <span>
              is not responsible for any loss or damage suffered by you directly
              or indirectly, as a result of our delay in/failure to deliver the
              data/report due to circumstances beyond our control, including but
              not limited to natural disasters, labor strikes, war, riot, civil
              disorder, embargo and government regulations or restrictions of
              any and all kinds. Delivery time shall be extended in such
              conditions, allowing us reasonable time to fulfill your
              requirements.{" "}
            </span>
          </li>
          <li>
            <span>
              A purchase order sent by you shall be construed to be a written
              acceptance of this quotation and offer to sell. However, unless
              accepted in writing by an authorized employee of{" "}
            </span>
            <b>DATAM INTELLIGENCE</b>
            <span>
              , any terms and conditions contained in any purchase order,
              acceptance, acknowledgment, or other document that you submit to{" "}
            </span>
            <b>DATAM INTELLIGENCE </b>
            <span>
              that are inconsistent with, different from, or additional to the
              terms and conditions of this quotation will be null and void, and
              the terms and conditions of this quotation shall control in their
              stead.{" "}
            </span>
          </li>
          <li>
            <span>
              Due to the format of delivery of our research studies, we cannot
              accept refunds. However, analyst support will be provided to
              address any queries post-purchase.{" "}
            </span>
          </li>
          <li>
            <span>
              You may not terminate the contract created upon acceptance of this
              offer and you agree to make the payment in full as laid out in
              this document.{" "}
            </span>
          </li>
        </ul>
      </Layout>
    </div>
  );
};

export default TermsConditions;
