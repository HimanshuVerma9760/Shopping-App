const db = require("../utils/database");

module.exports = productModel = class Product {
  constructor(name, author, url, price, desc) {
    this.title = name;
    this.author = author;
    this.url = url;
    this.price = price;
    this.desc = desc;
    this.qty = 1;
  }

  save() {
    return db.execute(
      "INSERT INTO products (`title`, `price`, `desc`, `imgurl`, `author`) VALUES(?, ?, ?, ?, ?)",
      [this.title, this.price, this.desc, this.url, this.author, this.qty]
    );
  }

  static fetchAll() {
    return db.execute("SELECT * FROM products");
  }
};
