const fs = require("fs");
const path = require("path");
const Cart = require("../models/Cart-model");
const p = path.join(__dirname, "..", "/file/Cart.json");

const cartItems = JSON.parse(fs.readFileSync(p));
// let fetchCart = false;
// const products = JSON.parse(
//   fs.readFileSync(path.join(__dirname, "..", "/file/Products.json"))
// );

// for (let index = 0; index < products.length; index++) {
//   if (cartItems.find((prods) => prods.id === products[index].id)) {
//     fetchCart = true;
//     break;
//   }
// }
// if (!fetchCart) {
//   fs.writeFileSync(path.join(__dirname, "..", "/file/Cart.json"), []);
// }
let subTotal = 0;
let addPrice = true;
let noOfItems = 0;
function gettingPrice() {
  // let myCart = Cart.cart.getCartItem();
  var total = 0;
  for (let index = 0; index < cartItems.length; index++) {
    total = total + Number(cartItems[index].price) * cartItems[index].qty;
    if (Number(cartItems[index].qty) > 1) {
      noOfItems = Number(cartItems[index].qty) + noOfItems;
    } else {
      noOfItems++;
    }
  }
  addPrice = false;
  return total;
}

exports.cartController = (req, res, next) => {
  Cart.cart.addProduct(req.params.itemId);
  const myCart = Cart.cart.getCartItem();
  if (addPrice) {
    subTotal = gettingPrice();
  }
  res.render("my-cart", { cartItems: myCart, subTotal, noOfItems });
};
exports.cart = (req, res, next) => {
  let myCart = Cart.cart.getCartItem();
  if (req.params.itemId) {
    let product = myCart.filter((prod) => prod.id !== req.params.itemId);
    fs.writeFileSync(p, JSON.stringify(product));
    myCart = Cart.cart.getCartItem();
  }
  if (addPrice) {
    subTotal = gettingPrice();
  }
  res.render("my-cart", {
    cartItems: myCart,
    subTotal,
    noOfItems,
  });
};
