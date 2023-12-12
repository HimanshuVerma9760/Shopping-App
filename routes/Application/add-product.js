const express = require("express");
const path = require("path");
const routes = express.Router();

routes.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../views", "add-product.html"));
});
routes.post("/add-product", (req, res, next) => {
  res.send("<h1>Product added successfuly</h1>");
});

module.exports = routes;
