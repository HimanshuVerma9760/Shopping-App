const express = require("express");
const { searchCart, addToCart } = require("../../controllers/cart-controller");
const { showCart } = require("../../controllers/cart-all-products-controller");

const route = express.Router();

route.get("/add-to-cart/:prodId", searchCart);
route.get("/my-cart/:uid", showCart);
route.post("/add-to-cart/", addToCart);

module.exports = route;
