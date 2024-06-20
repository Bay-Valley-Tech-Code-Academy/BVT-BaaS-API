require("dotenv").config();
const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: process.env.host, // or '127.0.0.1'
  user: process.env.user,
  password: process.env.password,
  port: process.env.port,
  database: process.env.database,
  namedPlaceholders: true,
});

module.exports = db;
