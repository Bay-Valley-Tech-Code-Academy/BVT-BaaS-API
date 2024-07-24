const { db } = require("../db");
async function updateOrCreateRefreshToken(
  userId,
  projectId,
  newToken,
  newExpirationDate
) {
  // Check if a refresh token already exists for the user
  try {
    const [rows] = await db.query(
      "SELECT * FROM refresh_tokens WHERE user_id = :userId AND project_id = :projectId",
      { userId, projectId }
    );

    if (rows.length > 0) {
      // Update existing refresh token
      const [updateResult] = await db.query(
        "UPDATE refresh_tokens SET token = :newToken, expires_at = :newExpirationDate, updated_at = NOW() WHERE user_id = :userId AND project_id = :projectId",
        { userId, projectId, newToken, newExpirationDate }
      );
      return updateResult;
    } else {
      // Create a new refresh token
      const [insertResult] = await db.query(
        "INSERT INTO refresh_tokens (user_id, project_id, token, expires_at) VALUES (:userId, :projectId, :newToken, :newExpirationDate)",
        { userId, projectId, newToken, newExpirationDate }
      );
      return insertResult;
    }
  } catch (error) {
    console.error(`Error in updateOrCreateRefreshToken:`, error);
    throw error;
  }
}

async function getRefreshToken(token) {
  const [result] = await db.query(
    "SELECT * FROM refresh_tokens WHERE token = :token",
    { token }
  );
  if (result.length === 0) return false;
  return result[0];
}

async function deleteRefreshTokensByProjectId(projectId) {
  const [result] = await db.query(
    "DELETE  FROM refresh_tokens WHERE project_id = :projectId",
    { projectId }
  );
  return result;
}

module.exports = {
  updateOrCreateRefreshToken,
  getRefreshToken,
  deleteRefreshTokensByProjectId,
};
