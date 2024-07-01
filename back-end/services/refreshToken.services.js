const db = require("../db");
async function updateOrCreateRefreshToken(userId, newToken, newExpirationDate) {
  // Check if a refresh token already exists for the user
  const [rows] = await db.query(
    "SELECT * FROM refresh_tokens WHERE user_id = ?",
    [userId]
  );

  if (rows.length > 0) {
    // Update existing refresh token
    await db.query(
      "UPDATE refresh_tokens SET token = :newToken, expires_at = :newExpirationDate, updated_at = NOW() WHERE user_id = :userId",
      { userId, newToken, newExpirationDate }
    );
  } else {
    // Create a new refresh token
    await db.query(
      "INSERT INTO refresh_tokens (user_id, token, expires_at) VALUES (:userId, :newToken, :newExpirationDate)",
      { userId, newToken, newExpirationDate }
    );
  }
}

module.exports = {
  updateOrCreateRefreshToken,
};
