const crypto = require("crypto");

function generateApiKey() {
  const apiKey = crypto.randomBytes(16).toString("hex");
  return { apiKey };
}

module.exports = {
  generateApiKey,
};
