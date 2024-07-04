const db = require("../db");

async function createUser({
  email,
  password,
  phoneNumber,
  mfaMethod,
  projectId,
}) {
  const result = await db.query(
    `
    INSERT INTO users (email, password, phone_number, mfa_method, project_id)
    VALUES (:email, :password,:phoneNumber,:mfaMethod, :projectId);
  `,
    {
      email,
      password,
      phoneNumber,
      mfaMethod,
      projectId,
    }
  );
  return result[0];
}

async function getUser(email) {
  const [result] = await db.query(
    `
    SELECT * FROM users WHERE email=:email;
  `,
    {
      email,
    }
  );
  if (result.length === 0) return false;
  return result[0];
}

async function getUserById(userId) {
  const [result] = await db.query(
    `
    SELECT * FROM users WHERE user_id=:userId;
  `,
    {
      userId,
    }
  );
  if (result.length === 0) return false;
  return result[0];
}

async function toggleLoginDisabledFlag(userId, projectId, loginFlag) {
  const result = await db.query(
    `
    UPDATE users
    SET disable_login_flag=:loginFlag
    WHERE user_id=:userId AND project_id=:projectId
  `,
    {
      userId,
      projectId,
      loginFlag,
    }
  );
  return result[0];
}

module.exports = {
  createUser,
  getUser,
  toggleLoginDisabledFlag,
  getUserById,
};
