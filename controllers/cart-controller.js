const Cart = require("../models/Cart-model");
const Products = require("../models/product-model");

exports.cartController = (req, res, next) => {
  Cart.cart.addCartItem(Products.fetchAll(), req.params.itemId);
  this.cart(req, res, next);
};
exports.cart = (req, res, next) => {
  const myCart = Cart.cart.getCartItem();
  console.log(myCart);
  res.render("my-cart", { cartItems: myCart });
};
