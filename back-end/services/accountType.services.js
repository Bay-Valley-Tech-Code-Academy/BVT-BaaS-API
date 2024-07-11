const { db } = require("../db");
async function getAccountType(accountType) {
  const [result] = await db.query(
    `SELECT * FROM account_limits WHERE account_type=:accountType;`,
    { accountType }
  );

  if (result.length === 0) {
    return false;
  }

  return result[0];
}

module.exports = {
  getAccountType,
};
