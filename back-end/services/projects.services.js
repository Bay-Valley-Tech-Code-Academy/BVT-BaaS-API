const db = require("../db");
async function getProjectByApiKey(apiKey) {
  const [result] = await db.query(
    `
    SELECT * FROM projects
    WHERE api_key=:apiKey;
  `,
    {
      apiKey,
    }
  );

  if (result.length === 0) return false;
  return result[0];
}

async function getProjectById(projectId) {
  console.log(projectId);
  const [result] = await db.query(
    `
    SELECT * FROM projects
    WHERE project_id=:projectId;
  `,
    {
      projectId,
    }
  );

  if (result.length === 0) return false;
  return result[0];
}

async function getUsersByProjectId(projectId) {
  const [result] = await db.query(
    `
      SELECT user_id, email, phone_number, mfa_method, staff_flag, disable_login_flag, created_at, updated_at
      FROM users
      WHERE project_id=:projectId
    `,
    {
      projectId,
    }
  );
  return result;
}

module.exports = { getProjectByApiKey, getProjectById, getUsersByProjectId };
