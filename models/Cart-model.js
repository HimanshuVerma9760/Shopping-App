const Product = require("./product-model");
const db = require("../utils/database");

exports.cart = class myCart {
  static addProduct(itemId) {
    let CartItem;

    console.log(itemId);
    // let CartItem;
    Product.fetchAll()
      .then(([rows, fieldData]) => {
        CartItem = rows.find((prod) => prod.id == itemId);
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
        // console.log(CartItem);
      })
      .catch((err) => console.log(err));
  }

  static getCartItem() {
    return db.execute("SELECT * FROM cart");
  }
};
