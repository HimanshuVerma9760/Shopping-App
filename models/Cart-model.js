const fs = require("fs");
const path = require("path");

exports.cart = class MyCart {
  static addCartItem(items, itemId) {
    for (let index = 0; index < items.length; index++) {
      if (items[index].id === itemId) {
        fs.writeFileSync(
          path.join(__dirname, "..", "/file/Cart.json"),
          JSON.stringify(items)
        );
      }
    }
  }
  static getCartItem() {
    const allItems = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../file/Cart.json"))
    );
    return allItems;
  }
};
