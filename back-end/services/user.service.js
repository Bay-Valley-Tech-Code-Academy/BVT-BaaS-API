const db = require("../db");

async function createUser({ email, password, name, apiKey, secret }) {
  const result = await db.query(
    `
    INSERT INTO users (email, password, phone_numbeer, mfa_method, organiza)
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
