const { db } = require("../db");
async function getAccountType(organizationId) {
  const [result] = await db.query(
    `SELECT o.organization_id, o.name, a.account_type, a.max_users, a.max_projects
    FROM  organizations o JOIN account_limits a ON o.account_type = a.account_type
    WHERE o.organization_id=:organizationId`,
    { organizationId }
  );
  return result[0];
}

module.exports = {
  getAccountType,
};
