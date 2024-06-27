const db = require("../db");

async function getAudit({ projectId }) {
    const result = await db.query(
      `
      SELECT * from audits where project_id=:projectId
      `,
      { projectId }
    );
  
    return result[0];
  }

  module.exports = {
    getAudit,
  };