import React from "react";
import Link from "next/link";

const PageLink = props => (
  <li>
    <Link href={`/product?keyurl=${props.keyurl}`}>
      <a>{props.keyurl}</a>
    </Link>
  </li>
);

export default PageLink;
