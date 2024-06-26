const db = require("../db");

async function createOrganization({ email, password, name }) {
  const result = await db.query(
    `
    INSERT INTO organization (email, password, name)
    VALUES (:email, :password, :name);
  `,
    {
      email,
      password,
      name,
    }
  );
  return result[0];
}

async function getOrganization(email) {
  const [result] = await db.query(
    `
    SELECT * FROM organization 
    WHERE email=:email;
  `,
    {
      email,
    }
  );

  if (result.length === 0) return false;
  return result[0];
}

module.exports = {
  createOrganization,
  getOrganization,
};
