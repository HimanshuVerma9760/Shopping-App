const Products = require("../models/product");
exports.prodsPost = (req, res, next) => {
  const product = new Products(req.body.item);
  product.save();
  res.redirect("/");
};
exports.prodsGet = (req, res, next) => {
  res.render("my-product", { docTitle: "Products" });
};

exports.shopProdGet = (req, res, next) => {
  const products = Products.fetchAll();
  res.render("my-shop", { prods: products, docTitle: "My-Shop" });
};
