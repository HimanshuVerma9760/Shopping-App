const products = [];
const fs = require("fs");
const path = require("path");

module.exports = productModel = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    products.push(this);
    fs.writeFile(path.join(__dirname, "../file/my-file.txt"), JSON.stringify(products), (err) => {
      if (err) {
        console.log(err);
      } else console.log("successful");
    });
  }

  static fetchAll() {
    return products;
  }
};
