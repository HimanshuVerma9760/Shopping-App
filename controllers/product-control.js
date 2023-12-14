const product = [];
var c = 0;
exports.prodsPost = (req, res, next) => {
  const yourProduct = req.body.item;
  product.push({ title: yourProduct });
  console.log(yourProduct);
  res.redirect("/");
};
exports.prodsGet = (req, res, next) => {
  res.render("my-product", { docTitle: "Products" });
};

exports.shopProdGet = (req, res, next) => {
  c = c + 1;
  res.render("my-shop", { prods: product, docTitle: "My-Shop" });
};
