const express = require("express");
const cartController = require("../../controllers/cart-controller");

const route = express.Router();

route.get("/add-to-cart/:itemId", cartController.cart);
route.get("/add-to-cart/", cartController.cart);
route.post("/add-to-cart/:itemId", cartController.cartController);

module.exports = route;
