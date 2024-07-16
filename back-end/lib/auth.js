const jwt = require("jsonwebtoken");

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
}
function generateRefreshToken(user) {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
}
function generateUserAccessToken(user, secret) {
  return jwt.sign(user, secret, { expiresIn: "15m" });
}
function generateUserRefreshToken(user, secret) {
  return jwt.sign(user, secret, { expiresIn: "7d" });
}

function decodeToken(token, secret) {
  return jwt.verify(token, secret);
}

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  generateUserAccessToken,
  generateUserRefreshToken,
  decodeToken,
};
