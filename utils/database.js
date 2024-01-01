const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "shopping-app",
  password: "Hh@35412879",
});

module.exports=pool.promise();
