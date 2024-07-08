const { generateApiKeyAndSecret } = require("../lib/keys");
const {
  getUsersByProjectId,
  getProjectById,
  getAllProjects,
  updateApiKeyAndSecret,
  deleteProject,
} = require("../services/projects.services");
const {
  deleteRefreshTokensByProjectId,
} = require("../services/refreshToken.services");

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

    // Verify the organization is the owner of this project
    // if (req.user.id !== projectId.organization_id) {
    //   return res.status(403).json({
    //     success: false,
    //     error: "Unauthorized access",
    //   });
    // }

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
    projectSecret,
  );

  if (result.affectedRows === 0) {
    return res.status(400).json({
      success: false,
      error: "Failed to regenerate keys",
    });
  }
  // Delete all refresh tokens associated with this project, essentially invalidating them.
  await deleteRefreshTokensByProjectId(project.project_id);

  return res.status(200).json({
    success: true,
    data: {
      apiKey,
      projectSecret,
    },
  });
}

async function deleteProjectHandler(req, res) {
  try {
    const projectId = req.params.projectId;
    const project = await getProjectById(projectId);
    if (!project) {
      return res.status(400).json({
        success: "false",
        error: "Project does not exist.",
      });
    }

    // Authentication check
    if (req.user.id !== project.organization_id) {
      return res.status(403).json({
        success: false,
        error: "Unauthorized access",
      });
    }

    const result = await deleteProject(projectId);

    if (result.affectedRows === 0) {
      return res.status(400).json({
        success: false,
        error: "Failed to delete project.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Project deleted successfully.",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      error: "Server error, please try again later.",
    });
  }
}

module.exports = {
  getUsersByProjectIdHandler,
  getAllProjectsHandler,
  regenerateProjectKeysHandler,
  deleteProjectHandler,
};
