const Product = require("../models/product-model");

exports.getProduct = (req, res, next) => {
  res.render("add-product");
};
exports.postProduct = (req, res, next) => {
  const newProduct = new Product(
    req.body.title,
    req.body.author,
    req.body.price
  );
  newProduct.save();
  res.redirect("/");
};
exports.mainPage = (req, res, next) => {
  const product = Product.fetchAll();
  res.render("mainPage", { Books: product });
};
