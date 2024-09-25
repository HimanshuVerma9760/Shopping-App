const express = require("express");
const { getProduct } = require("../controllers/product-controller");

const mainRoute = express.Router();

const getProductRoute = mainRoute.get("/", getProduct);

exports.getProductRoute = getProductRoute;
