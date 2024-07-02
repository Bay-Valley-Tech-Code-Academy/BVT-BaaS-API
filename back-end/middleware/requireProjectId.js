const { getProject } = require("../services/projects.services");

async function requireProjectId(req, res, next) {
  const projectId = req.headers["project_id"];
  if (!projectId) {
    return res.status(401).json({ error: "Project ID missing" });
  }

  const project = await getProject(projectId);
  if (!project) {
    return res.status(401).json({ error: "Invalid Project ID" });
  }
  req.project = project;

  next();
}

module.exports = requireProjectId;
