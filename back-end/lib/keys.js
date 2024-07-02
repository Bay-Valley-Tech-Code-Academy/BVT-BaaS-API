const crypto = require("crypto");

function generateApiKeyAndSecret() {
  const apiKey = crypto.randomBytes(32).toString("hex");
  const projectSecret = crypto.randomBytes(32).toString("hex");
  return { apiKey, projectSecret };
}

module.exports = {
  generateApiKeyAndSecret,
};
