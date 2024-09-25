const mongoose = require("mongoose");

const db = () => {
  mongoose
    .connect(
      `mongodb+srv://himanshu2512verma:${encodeURIComponent(
        "Hh@35412879"
      )}@shopcluster.9beohtt.mongodb.net/Shop?retryWrites=true&w=majority&appName=ShopCluster`
    )
    .then(() => {
      console.log("Connected.to database..!!!");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = db;
