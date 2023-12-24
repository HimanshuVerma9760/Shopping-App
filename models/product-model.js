const products = [];
const fs = require("fs");
const path = require("path");

module.exports = productModel = class Product {
  constructor(name, author, price) {
    this.title = name;
    this.author = author;
    this.price = price;
    this.qty = 1;
  }

  save() {
    this.id = Math.random().toString();
    products.push(this);
    fs.writeFile(
      path.join(__dirname, "../file/Products.json"),
      JSON.stringify(products),
      (err) => {
        if (err) {
          console.log(err);
        }
      }
    );
  }

  static fetchAll() {
    return products;
  }
};
