const { db } = require("../db");

async function getProjectAuditData(projectId) {
  const [result] = await db.query(
    `SELECT * FROM audits
        WHERE project_id=:projectId;`,
    { projectId }
  );
  return result;
}

// audit_id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
// audit_type ENUM(
//   'login_failed',
//   'login_successful',
//   'password_reset_requested',
//   'password_reset_requested_user_account_not_found',
//   'password_reset_confirmation_failed',
//   'password_reset_confirmation_successful'
// ) NOT NULL,
// ip_address VARCHAR(45),
// user_id INT,
// project_id INT,

async function createAudit({ auditType, ipAddress, userId, projectId }) {
  const result = await db.query(
    `
    INSERT INTO audits (audit_type, ip_address,user_id, project_id) VALUES (:auditType, :ipAddress, :userId, :projectId);
  `,
    {
      auditType,
      ipAddress,
      userId,
      projectId,
    }
  );
  return result[0];
}

module.exports = {
  getProjectAuditData,
  createAudit,
};
