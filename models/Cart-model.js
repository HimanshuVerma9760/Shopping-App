const Product = require("./product-model");
const db = require("../utils/database");

exports.cart = class myCart {
  static addProduct(itemId) {
    //adding Product to cart
    Product.fetchAll()
      .then(([rows, fieldData]) => {
        let CartItem = rows.find((prod) => prod.id == itemId);
        const title = CartItem.title;
        const author = CartItem.author;
        const imgurl = CartItem.imgurl;
        const price = CartItem.price;
        const qty = 1;
        const prodId = CartItem.id;
        return db.execute(
          "INSERT INTO cart (`title`, `author`, `imgurl`, `price`, `qty`, `prodId`) VALUES (?, ?, ?, ?, ?, ?)",
          [title, author, imgurl, price, qty, prodId]
        );
      })
      .catch((err) => console.log(err));
  }
  static remove(id) {
    return db.execute(`DELETE FROM cart where prodId=${id}`);
  }
  static getCartItem() {
    return db.execute("SELECT * FROM cart");
  }
};
