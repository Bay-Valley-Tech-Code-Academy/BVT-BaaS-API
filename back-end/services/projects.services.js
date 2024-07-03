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

async function getAllProjects(organizationId) {
  const [result] = await db.query(
    `
      SELECT *
      FROM projects
      WHERE organization_id=:organizationId
    `,
    {
      organizationId,
    }
  );
  return result;
}

async function updateApiKeyAndSecret(projectId, apiKey, projectSecret) {
  const [result] = await db.query(
    `
        UPDATE projects
        SET api_key = :apiKey, secret = :projectSecret
        WHERE project_id = :projectId
    `,
    {
      apiKey,
      projectSecret,
      projectId,
    }
  );
  return result;
}

module.exports = {
  getProjectByApiKey,
  getProjectById,
  getUsersByProjectId,
  getAllProjects,
  updateApiKeyAndSecret,
};
