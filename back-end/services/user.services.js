const { db } = require("../db");

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
    VALUES (:email, :password, :phoneNumber, :mfaMethod, :projectId);
  `,
    {
      email,
      password,
      phoneNumber,
      mfaMethod,
      projectId,
    },
  );
  return result[0];
}

async function loginUser(userId, verifyToken) {
  const [result] = await db.query(
    `
    UPDATE users SET verify_token = :verifyToken WHERE user_id = :userId;
    `,
    { userId, verifyToken },
  );

  if (result.affectedRows === 0) return false;
  return result;
}

async function deleteUser(userId) {
  const [result] = await db.query(
    `
    DELETE FROM users
    WHERE user_id = :userId;
    `,
    {
      userId,
    },
  );
  if (result.length === 0) return false;
  return result;
}

async function getUserByEmail(email, projectId) {
  const [result] = await db.query(
    `
    SELECT * FROM users WHERE email=:email AND project_id=:projectId;
  `,
    {
      email,
      projectId,
    },
  );
  if (result.length === 0) return false;
  return result[0];
}

async function getUserById(userId) {
  const [result] = await db.query(
    `
    SELECT * FROM users
    WHERE user_id = :userId;
    `,
    {
      userId,
    },
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
    },
  );
  return result[0];
}

module.exports = {
  createUser,
  loginUser,
  deleteUser,
  getUserByEmail,
  toggleLoginDisabledFlag,
  getUserById,
};
