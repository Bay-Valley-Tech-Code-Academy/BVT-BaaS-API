require("dotenv").config();
const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: process.env.host, // || '127.0.0.1'
  user: process.env.user,
  password: process.env.password,
  port: process.env.port,
  database: process.env.database,
  namedPlaceholders: true,
  multipleStatements: true,
});


const closePool = async () => {
  if (db) {
    await db.end();
    console.log("Database connection pool closed");
  }
};

module.exports = {
  db,
  closePool,
};
