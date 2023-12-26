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
  const myCart = Cart.cart.getCartItem();
  subTotal = gettingPrice();
  res.render("my-cart", {
    cartItems: myCart,
    totalPrice: subTotal,
    noOfItems,
  });
};
exports.cart = (req, res, next) => {
  let myCart = Cart.cart.getCartItem();
  if (req.params.itemId) {
    let product = myCart.filter((prod) => prod.id !== req.params.itemId);
    fs.writeFileSync(p, JSON.stringify(product));
    myCart = Cart.cart.getCartItem();
  }
  subTotal = gettingPrice();
  res.render("my-cart", {
    cartItems: myCart,
    totalPrice: subTotal,
    noOfItems,
  });
};
