const jwt = require("jsonwebtoken");
function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
}

// Function to generate a refresh token
function generateRefreshToken(user) {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
}

function generateUserRefreshToken(user, secret) {
  return jwt.sign(user, secret, { expiresIn: "7d" });
}

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  generateUserRefreshToken,
};
