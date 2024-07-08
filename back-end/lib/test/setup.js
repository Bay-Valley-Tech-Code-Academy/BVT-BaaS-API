const { db, closePool } = require("../../db");
const fs = require("fs");
const path = require("path");

const resetDatabase = async () => {
  const sql = fs.readFileSync(
    path.resolve(__dirname, "../../db/init.sql"),
    "utf8"
  );

  await db.query(sql);
};

beforeAll(async () => {
  await db.getConnection(); // Ensure the pool is created
  await resetDatabase(); // Reset the database before all tests
});

afterAll(async () => {
  await closePool();
});
