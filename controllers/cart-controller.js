const fs = require("fs");
const path = require("path");
const Cart = require("../models/Cart-model");
const p = path.join(__dirname, "..", "/file/Cart.json");

let subTotal = 0;
let addPrice = true;
let noOfItems = 0;
function gettingPrice() {
  const cartItems = Cart.cart.getCartItem();
  var noi = 0;
  var total = 0;
  for (let index = 0; index < cartItems.length; index++) {
    total = total + Number(cartItems[index].price) * cartItems[index].qty;
    if (Number(cartItems[index].qty) > 1) {
      noi = Number(cartItems[index].qty) + noi;
    } else {
      noi++;
    }
  }
  addPrice = false;
  noOfItems = noi;
  return total;
}

exports.cartController = (req, res, next) => {
  Cart.cart.addProduct(req.params.itemId);
  Cart.cart
    .getCartItem()
    .then(() => {
      // subTotal = gettingPrice();
      // res.render("my-cart", {
      //   cartItems: rows,
      //   totalPrice: subTotal,
      //   noOfItems,
      // });
      res.redirect("/add-to-cart");
    })
    .catch((err) => console.log(err));
};
exports.cart = (req, res, next) => {
  Cart.cart
    .getCartItem()
    .then(([rows, fieldData]) => {
      subTotal = gettingPrice();
      res.render("my-cart", {
        cartItems: rows,
        totalPrice: subTotal,
        noOfItems,
      });
    })
    .catch((err) => console.log(err));
};
