const { getProjectAuditData } = require("../services/audit.services");
const {
  getProjectsByOrganizationId,
} = require("../services/projects.services");

async function getAuditHandler(req, res) {
  try {
    const organization = req.user;

    const projects = await getProjectsByOrganizationId(organization.id);
    const audits = await Promise.all(
      projects.map(async (project) => {
        const { project_id, name } = project;
        const audits = await getProjectAuditData(project_id);
        return { project_id, name, audits };
      })
    );
    return res.status(200).json({
      success: true,
      data: audits,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      error: "Server error, please try again later",
    });
  }
}

module.exports = {
  getAuditHandler,
};
