const { db } = require("../db");

async function createOrganization({ email, password, name }) {
  const result = await db.query(
    `
    INSERT INTO organizations (email, password, name) VALUES (:email, :password, :name);
  `,
    {
      email,
      password,
      name,
    }
  );
  return result[0];
}

async function getOrganizationByEmail(email) {
  const [result] = await db.query(
    `SELECT * FROM organizations WHERE email=:email;`,
    { email }
  );

  if (result.length === 0) {
    return false;
  }

  return result[0];
}

async function getOrganizationById(organizationId) {
  const [result] = await db.query(
    `
    SELECT o.email, o.name, o.account_type, a.max_users, a.max_projects FROM
    organizations o JOIN account_limits a  ON o.account_type = a.account_type
    WHERE organization_id=:organizationId;
  `,
    {
      organizationId,
    }
  );

  if (result.length === 0) return false;
  return result[0];
}

async function deleteOrganization(organizationId) {
  const [result] = await db.query(
    `
    DELETE FROM organizations WHERE organization_id=:organizationId;
`,
    {
      organizationId,
    }
  );
  return result;
}

module.exports = {
  createOrganization,
  getOrganizationByEmail,
  getOrganizationById,
  deleteOrganization,
};
