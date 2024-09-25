const { Cart } = require("../models/Cart-model");

exports.showCart = async (req, res, next) => {
  const result = await Cart.find().exec();
  res.json(result);
};
