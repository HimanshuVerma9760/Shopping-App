const path = require("path");
const p = path.join(__dirname, "..", "/file/Cart.json");
const fs = require("fs");
const Product = require("./product-model");

// const cart = [];
exports.cart = class myCart {
  static addProduct(itemId) {
    // let updatedProduct;
    const myCart = JSON.parse(fs.readFileSync(p));
    const existingItemIndex = myCart.findIndex((prod) => prod.id === itemId);
    const existingItem = myCart.find((prod) => prod.id === itemId);
    console.log(existingItem);
    if (existingItem) {
      myCart[existingItemIndex].qty += 1;
      fs.writeFileSync(p, JSON.stringify(myCart));
    } else {
      const cartItem = Product.fetchAll().find((prods) => prods.id === itemId);
      if (cartItem) {
        // cart.push(cartItem);
        myCart.push(cartItem);
        fs.writeFileSync(p, JSON.stringify(myCart));
      } else {
        console.log("not found");
      }
    }
  }

  static getCartItem() {
    const cartContent = fs.readFileSync(p);
    return JSON.parse(cartContent);
  }
};
