const db = require("../db");

async function createOrganization({ email, password, name, apiKey, secret }) {
  const result = await db.query(
    `
    INSERT INTO organization (email, password, name, api_key, secret)
    VALUES (:email, :password, :name, :apiKey, :secret);
  `,
    {
      email,
      password,
      name,
      apiKey,
      secret,
    }
  );
  return result[0];
}

async function getOrganization({ email, apiKey }) {
  const [result] = await db.query(
    `
    SELECT * FROM organization 
    WHERE email=:email OR api_key:apiKey;
  `,
    {
      email,
      apiKey,
    }
  );

  if (result.length === 0) return false;
  return result[0];
}

module.exports = {
  createOrganization,
  getOrganization,
};
