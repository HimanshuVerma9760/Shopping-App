const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  url: { type: String, required: true },
  price: { type: Number, required: true },
  desc: { type: String, required: true },
  qty: { type: Number, default: 1},
});

exports.Product = mongoose.model("Product", productSchema);
