const express = require("express");
const path = require("path");
const productData = require("./add-product");

const routes = express.Router();

routes.get("/", (req, res, next) => {
  console.log(productData.products);
  res.sendFile(path.join(__dirname, "../views", "shop.html"));
});

module.exports = routes;
