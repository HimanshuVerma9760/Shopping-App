const { default: mongoose } = require("mongoose");

const saveLaterSchema = new mongoose.Schema({
  itemRefId: [{ type: mongoose.Types.ObjectId, required: true, ref: "Product" }],
  userRefId: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
});

exports.SaveLater = mongoose.model("SaveLater", saveLaterSchema);
