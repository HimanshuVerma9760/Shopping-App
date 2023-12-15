const products = [];
exports.getProduct = (req, res, next) => {
  res.render("add-product");
};
exports.postProduct = (req, res, next) => {
  products.push(req.body.title);
  res.redirect("/");
};
exports.mainPage=(req, res, next)=>{
    res.render("mainPage", {Books: products});
}
