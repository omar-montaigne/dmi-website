import React from "react";
import Link from "next/link";
import "../scss/related-reports.scss";
const RelatedReportSec = (props) => {


  const listItems = props.relatedReports.map((report, index) => (
    <li key={index} className="related-reports-item">
      {/* <img
        src={report.ImagePath}
        alt={report.Title}
        className="related-reports-img"
      /> */}
      <img src={report.ImagePath} className="related-reports-img" />
      <Link as={`/research-reports/${report.slug}`} href={`/product?keyurl=${report.slug}`}>
        <a>{report.Product_Title}</a>
      </Link>
    </li>
  ));

  return (
    <div className="related-reports-box">
      <h3>People also searched for</h3>
      <ul className="related-reports-list">{listItems}</ul>
    </div>
  );
};

export default RelatedReportSec;
