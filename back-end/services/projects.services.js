const { db } = require("../db");
async function getProjectByApiKey(apiKey) {
  const [result] = await db.query(
    `
    SELECT * FROM projects
    WHERE api_key = :apiKey;
  `,
    {
      apiKey,
    }
  );

  if (result.length === 0) {
    return null;
  }
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
      SELECT u.user_id, u.email, u.phone_number, u.mfa_method, u.staff_flag, u.disable_login_flag, u.created_at, last_signin.last_signed_in
      FROM users u LEFT JOIN (
        SELECT user_id, MAX(created_at) AS last_signed_in
        FROM audits
        WHERE project_id = :projectId
        GROUP BY user_id
      ) last_signin
      ON u.user_id = last_signin.user_id
      WHERE u.project_id=:projectId
      ORDER BY last_signed_in DESC
    `,
    {
      projectId,
    }
  );
  return result;
}

async function getProjectsByOrganizationId(organizationId) {
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

async function getUserByIdAndProject(userId, projectId) {
  const [result] = await db.query(
    `
    SELECT * FROM users
    WHERE user_id=:userId AND project_id:projectId
  `,
    {
      userId,
      projectId,
    }
  );

  if (result.length === 0) return false;
  return result[0];
}
async function updateProjectName(projectId, projectName) {
  const [result] = await db.query(
    `
        UPDATE projects
        SET name = :projectName
        WHERE project_id = :projectId
    `,
    {
      projectId,
      projectName,
    }
  );
  return result;
}

module.exports = {
  getProjectByApiKey,
  getProjectById,
  getUsersByProjectId,
  getProjectsByOrganizationId,
  updateApiKeyAndSecret,
  getUserByIdAndProject,
  updateProjectName,
};
