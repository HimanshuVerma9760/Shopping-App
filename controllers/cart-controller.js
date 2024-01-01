const Cart = require("../models/Cart-model");
const db = require("../utils/database");
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

checkCart = (itemId) => {};

exports.cartController = (req, res, next) => {
  let itemId = req.params.itemId;
  let addProduct = true;
  Cart.cart
    .getCartItem()
    .then(([row, fieldData]) => {
      row.forEach((prods) => {
        let itemQty = prods.qty;
        if (prods.prodId == itemId) {
          itemQty++;
          addProduct = false;
          return db.execute(
            `UPDATE cart SET qty=${itemQty} WHERE prodId=${itemId}`
          );
        }
      });
      if (addProduct) {
        Cart.cart.addProduct(itemId);
        res.redirect("/add-to-cart");
        res.redirect("/add-to-cart");
      }
    })
    .catch((err) => console.log(err));
  // Cart.cart
  //   .getCartItem()
  //   .then(() => {
  //     res.redirect("/add-to-cart");
  //   })
  //   .catch((err) => console.log(err));
};
exports.cart = (req, res, next) => {
  if (req.params.prodId) {
    Cart.cart
      .remove(req.params.prodId)
      .then(() => {
        res.redirect("/add-to-cart");
      })
      .catch((err) => console.log(err));
  } else {
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
  }
};
