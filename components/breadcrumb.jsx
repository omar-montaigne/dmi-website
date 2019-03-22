import React from "react";
import Link from "next/link"
import "../scss/breadcrumb.scss";

const Breadcrumb = (props) => {
  return (
    <div className="breadcrumb-box">
      <p>
        <span>
          <Link href="/"><a>
            Home</a></Link> >
          <span>
            <Link as={`/category/${props.category.mainSelect}`} href={`/mainCategory?main=${props.category.mainSelect}`}><a>
              {props.category.mainSelect}</a></Link> >
            <span>
              <Link as={`/category/${props.category.mainSelect}/${props.category.productSelect}`} href={`/mainCategory?main=${props.category.mainSelect}&&product=${props.category.productSelect}`}><a>
                {props.category.productSelect}</a></Link> >
              <span>
                <Link as={`/category/${props.category.mainSelect}/${props.category.productSelect}/${props.category.subSelect}`} href={`/mainCategory?main=${props.category.mainSelect}&&product=${props.category.productSelect}&&sub=${props.category.subSelect}`}><a>
                  {props.category.subSelect}</a></Link> >
                <span style={{ color: "#FC5B01" }}>
                  {props.breadtitle === "" && props.Title}
                  {props.breadtitle}
                </span>
              </span>
            </span>
          </span>
        </span>
      </p>
      <style jsx>{`

        a{
          text-decoration: none;
          color: #a3a3a3;
        }

      `}</style>
    </div>
  );
};

export default Breadcrumb;
