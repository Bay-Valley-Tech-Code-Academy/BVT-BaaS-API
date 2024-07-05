const crypto = require("crypto");

function generateApiKeyAndSecret() {
  const apiKey = crypto.randomBytes(16).toString("hex");
  const projectSecret = crypto.randomBytes(16).toString("hex");
  return { apiKey, projectSecret };
}

module.exports = {
  generateApiKeyAndSecret,
};
