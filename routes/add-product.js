const express = require("express");

const productController = require("../controllers/product-controller");

const route = express.Router();

route.get("/get-products", productController.getProduct);
route.post("/add-product", productController.postProduct);

module.exports = route;
