const Cart = require("../models/Cart-model");

let myCart = Cart.cart.getCartItem();

exports.cartController = (req, res, next) => {
  Cart.cart.addProduct(req.params.itemId);
  myCart = Cart.cart.getCartItem();
  res.render("my-cart", { cartItems: myCart });
};
exports.cart = (req, res, next) => {
  res.render("my-cart", { cartItems: myCart });
};
