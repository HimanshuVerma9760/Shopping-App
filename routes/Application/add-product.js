const express = require("express");
// const path = require("path");
const routes = express.Router();

const product = [];
routes.post("/add-product", (req, res, next) => {
  product.push({ title: req.body.title });
  res.redirect("/");
});
routes.get("/add-product", (req, res, next) => {
  res.render('my-product', ({docTitle: "Products"}));
});

exports.routes = routes;
exports.products = product;
