const fs = require("fs");
const path = require("path");
exports.showProduct = (req, res, next) => {
  const id = req.params.productId;
  const productDetail = this.findProduct(id);
  res.render("product-details", { product: productDetail });
};
exports.findProduct = (id) => {
  const product = fs.readFileSync(path.join(__dirname, "../file/Products.json"));
  const content = JSON.parse(product);
  for (let index = 0; index < content.length; index++) {
    if (content[index].id === id) {
      return content[index];
    }
  }
};
