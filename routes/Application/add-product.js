const express = require("express");
const path = require("path");
const routes = express.Router();

const product = [];
routes.post("/add-product", (req, res, next) => {
  product.push({ title: req.body.title });
  res.redirect("/");
});
routes.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../views", "add-product.html"));
});

exports.routes = routes;
exports.products = product;
