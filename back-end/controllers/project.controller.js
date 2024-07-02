const { generateApiKeyAndSecret } = require("../lib/keys");
const {
  getUsersByProjectId,
  getProjectById,
  getAllProjects,
  updateApiKeyAndSecret,
} = require("../services/projects.services");

async function getUsersByProjectIdHandler(req, res) {
  try {
    const projectId = req.params.projectId;

    // check if project exist
    const project = await getProjectById(projectId);
    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    //   verify that the organization is the owner of this project
    /*
     if(req.user.id !== project.organization_id ){
     return res.status(403).json({
     success: false, 
     message: "Unauthorized access",
     })
     }
    */
    const users = await getUsersByProjectId(projectId);
    return res.status(200).json({
      success: true,
      data: users,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      error: "Server error, please try again later",
    });
  }
}

async function getAllProjectsHandler(req, res) {
  try {
    // hardcode the id for development
    const organizationId = 1 || req.user.id;
    const projects = await getAllProjects(organizationId);
    return res.status(200).json({
      success: true,
      data: projects,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      error: "Server error, please try again later",
    });
  }
}

async function regenerateProjectKeysHandler(req, res) {
  const projectId = req.params.projectId;

  // check if project exist
  const project = await getProjectById(projectId);
  if (!project) {
    return res.status(404).json({
      success: false,
      message: "Project not found",
    });
  }
  //   verify that the organization is the owner of this project
  /*
     if(req.user.id !== project.organization_id ){
     return res.status(403).json({
     success: false, 
     message: "Unauthorized access",
     })
     }
    */
  const { apiKey, projectSecret } = generateApiKeyAndSecret();
  const result = await updateApiKeyAndSecret(
    project.project_id,
    apiKey,
    projectSecret
  );

  if (result.affectedRows === 0) {
    return res.status(400).json({
      success: false,
      error: "Failed to regenerate keys",
    });
  }

  return res.status(200).json({
    success: true,
    data: {
      apiKey,
      projectSecret,
    },
  });
}

module.exports = {
  getUsersByProjectIdHandler,
  getAllProjectsHandler,
  regenerateProjectKeysHandler,
};
