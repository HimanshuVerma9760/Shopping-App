const { Cart } = require("../models/Cart-model");
const { Product } = require("../models/product-model");
const { SaveLater } = require("../models/save-for-later-model");

exports.searchCart = async (req, res, next) => {
  const id = req.params.prodId;

  try {
    const cart = await Cart.find({ "products.product": id });
    if (!cart) {
      return res.json({ message: "Cart Item not found..!!" });
    }
    const cartItem = cart.find((item) => item.products.toString() === id);
    res.json(cartItem);
  } catch (error) {
    console.log(error);
  }
};

exports.addToCart = async (req, res, next) => {
  const prodId = req.body.data.itemId;
  const userId = req.body.data.uid;
  let prod;
  try {
    prod = await Product.findOne({ _id: prodId });
  } catch (error) {
    console.log(error);
  }
  const prodPrice = prod.price;
  let userCart;
  try {
    userCart = await Cart.findOne({
      owner: userId,
    });
  } catch (error) {
    console.log(error);
  }
  let productIndex;
  if (userCart) {
    try {
      productIndex = userCart.products.findIndex(
        (item) => item.product.toString() === prodId
      );
    } catch (error) {
      console.log(error);
    }
    if (productIndex > -1) {
      console.log("product found in the cart at: " + productIndex);
      userCart.products[productIndex].quantity++;
    } else {
      userCart.products.push({ product: prodId, quantity: 1 });
    }
    userCart.totalPrice += prodPrice;
    userCart.totalQuantity++;
    let result;
    try {
      result = await userCart.save();
      res.json(result);
    } catch (error) {
      console.log(error);
    }
  } else {
    const newCart = new Cart({
      products: {
        product: prodId,
        quantity: 1,
      },
      totalQuantity: 1,
      totalPrice: prodPrice,
      owner: userId,
    });
    const result = await newCart.save();
    res.json(result);
  }
};

exports.saveForLater = async (req, res, next) => {
  const prodId = req.body.prodId;
  const userId = req.params.userId;

  const exsistingUser = await SaveLater.findOne({ userRefId: userId });
  if (exsistingUser) {
    const exsistingProd = await SaveLater.findOne({ itemRefId: prodId });
    if (exsistingProd) {
      res.json({ message: "Already have this product" });
    } else {
      exsistingUser.itemRefId.push(prodId);
      const result = await exsistingUser.save();
      res.json(result);
    }
  } else {
    const saveLater = new SaveLater({
      itemRefId: prodId,
      userRefId: userId,
    });
    const result = await saveLater.save();
    res.json(result);
  }
};

exports.getSaveForLater = async (req, res, next) => {
  const saveLaterItems = await SaveLater.findOne({
    userRefId: req.params.userId,
  }).populate("itemRefId");

  if (saveLaterItems) {
    res.json(saveLaterItems.itemRefId);
  } else {
    res.json({ message: "No Items Currently..!!" });
  }
};
