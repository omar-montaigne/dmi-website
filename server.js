const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/research-reports/:id", (req, res) => {
      const actualPage = "/product";
      const queryParams = { keyurl: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/category/:main", (req, res) => {
      const actualPage = "/mainCategory";
      const queryParams = { main: req.params.main };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/category/:main/:product", (req, res) => {
      const actualPage = "/mainCategory";
      const queryParams = { main: req.params.main, product: req.params.product };
      app.render(req, res, actualPage, queryParams);
    });
    server.get("/category/:main/:product/:sub", (req, res) => {
      const actualPage = "/mainCategory";
      const queryParams = { main: req.params.main, product: req.params.product, sub: req.params.sub };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/cart/:details", (req, res) => {
      const queryParams = { details: req.params.details };
      app.render(req, res, queryParams);
    });
    server.get("/checkout/:details", (req, res) => {
      const queryParams = { details: req.params.details };
      app.render(req, res, queryParams);
    });



    server.get("/", (req, res) => {
      app.render(req, res, "/");
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(process.env.PORT || 3001, err => {
      if (err) throw err;
      console.log("> Ready");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
