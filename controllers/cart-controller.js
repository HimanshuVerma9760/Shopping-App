const Cart = require("../models/Cart-model");
const path = require("path");

exports.cartController = (req, res, next) => {
  Cart.cart.addProduct(req.params.itemId);
  const myCart = Cart.cart.getCartItem();
  res.render("my-cart", { cartItems: myCart });
};
exports.cart = (req, res, next) => {
  res.render("my-cart");
};
