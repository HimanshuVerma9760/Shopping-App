const express = require("express");
// const path = require("path");
const productData = require("./add-product");

const routes = express.Router();

routes.get("/", (req, res, next) => {
  res.render("my-shop", { prods: productData.products, docTitle: "My-Shop" });
});

module.exports = routes;
