const db = require("../db");

async function createOrganization({ email, password, name, apiKey, secret }) {
  const result = await db.query(
    `
<<<<<<< HEAD
    INSERT INTO organization (email, password, name, api_key, secret)
    VALUES (:email, :password, :name, :apiKey, :secret);
=======
    INSERT INTO organizations (email, password, name) VALUES (:email, :password, :name);
>>>>>>> main
  `,
    {
      email,
      password,
      name,
<<<<<<< HEAD
      apiKey,
      secret,
    }
=======
    },
>>>>>>> main
  );
  return result[0];
}

<<<<<<< HEAD
async function getOrganization({ email, apiKey }) {
  const [result] = await db.query(
    `
    SELECT * FROM organization 
    WHERE email=:email OR api_key=:apiKey;
  `,
    {
      email,
      apiKey,
    }
=======
async function getOrganizationByEmail(email) {
  const [result] = await db.query(
    `SELECT * FROM organizations WHERE email=:email;`,
    { email },
  );

  if (result.length === 0) {
    return false;
  }

  return result[0];
}

async function getOrganizationById(organizationId) {
  const [result] = await db.query(
    `
    SELECT * FROM organizations WHERE organization_id=:organizationId;
  `,
    {
      organizationId,
    },
>>>>>>> main
  );

  console.log(result);

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
    },
  );
  return result;
}

module.exports = {
  createOrganization,
  getOrganizationByEmail,
  getOrganizationById,
  deleteOrganization,
};
