const db = require("../db");
async function getProject(apiKey) {
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

module.exports = { getProject };
