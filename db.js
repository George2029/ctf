const mysql = require("mysql2");

const mysqlConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  connectionLimit: process.env.DB_CONNECTION_LIMIT,
};

let con = mysql.createPool(mysqlConfig);

module.exports = con;
