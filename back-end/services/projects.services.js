const db = require("../db");

async function getProject(projectId) {
  const [result] = await db.query(
    `
    SELECT * FROM projects
    WHERE project_id = :projectId;
  `,
    {
      projectId,
    },
  );

  if (result.length === 0) {
    return null;
  }
  return result[0];
}

module.exports = { getProject };
