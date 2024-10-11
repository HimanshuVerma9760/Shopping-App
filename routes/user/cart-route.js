const express = require("express");
const {
  searchCart,
  addToCart,
  saveForLater,
  getSaveForLater,
  deleteItem,
} = require("../../controllers/cart-controller");
const { showCart } = require("../../controllers/cart-all-products-controller");

const route = express.Router();

route.get("/add-to-cart/:prodId", searchCart);
route.get("/my-cart/:uid", showCart);
route.delete("/delete/:prodId", deleteItem);
route.post("/add-to-cart/", addToCart);
route.post("/save-for-later/:userId", saveForLater);
route.get("/my-cart/save-for-later/:userId", getSaveForLater);

module.exports = route;
