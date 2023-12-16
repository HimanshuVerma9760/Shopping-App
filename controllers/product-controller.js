const Product = require("../models/product-model");

exports.getProduct = (req, res, next) => {
  res.render("add-product");
};
exports.postProduct = (req, res, next) => {
  const newProduct = new Product(req.body.title);
  newProduct.save();
  res.redirect("/");
};
exports.mainPage = (req, res, next) => {
  const product = Product.fetchAll();
  res.render("mainPage", { Books: product });
};
exports.deleteItem = (req, res, next) => {
  const index = products.indexOf(req.body.title);
  products.splice(index);
  res.redirect("/");
};
