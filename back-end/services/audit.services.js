const db = require("../db");

async function getAudit({ projectId }) {
  try {
    const [results] = await db.query(
      `
      SELECT * from audits where project_id = ?
      `,
      [ projectId ]
    );
  
    return results;

  } catch (err) {
    console.error('Error executing query:', err);
    throw err;
  }
  } 

  module.exports = {
    getAudit,
  };