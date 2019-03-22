import React, { Component } from "react";
import { withRouter } from "next/router";

const ProductTemplate = withRouter(props => (
  <div>
    <h1>{props.router.query.keyURL}</h1>
  </div>
));

export default ProductTemplate;
