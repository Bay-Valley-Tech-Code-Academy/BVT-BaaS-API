const { generateApiKey } = require("../lib/keys");
const {
  getUsersByProjectId,
  getProjectById,
  updateApiKey,
  deleteProject,
  updateProjectName,
  getProjectsByOrganizationId,
  createProject,
} = require("../services/projects.services");
const {
  deleteRefreshTokensByProjectId,
} = require("../services/refreshToken.services");
const {
  getUserById,
  toggleLoginDisabledFlag,
} = require("../services/user.services");

async function getUsersPerProjectHandler(req, res) {
  try {
    const organization = { id: 1 } | req.user;
    const projects = await getProjectsByOrganizationId(organization.id);
    const projectUsers = await Promise.all(
      projects.map(async (project) => {
        const { project_id, name } = project;
        const users = await getUsersByProjectId(project_id);
        return { project_id, name, users };
      }),
    );
    return res.status(200).json({
      success: true,
      data: projectUsers,
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
    const projects = await getProjectsByOrganizationId(organizationId);
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
    const { apiKey } = generateApiKey();
    const result = await updateApiKey(project.project_id, apiKey);

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
      },
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      error: "Server error, please try again later",
    });
  }
}

async function toggleDisableLoginFlagHandler(req, res) {
  try {
    const { projectId, userId } = req.params;
    const [project, user] = await Promise.all([
      getProjectById(projectId),
      getUserById(userId),
    ]);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "No project found",
      });
    }

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "No user found",
      });
    }

    // verify that the organization is the owner of the user.
    /*
    if(req.user.id !== project.organizatoin_id){
      return res.status(403).json({
        success: false,
        message: "Not authorized"
      })
    }
  */

    // You want to make sure that this user belongs to the project
    if (project.project_id !== user.project_id) {
      return res.status(403).json({
        success: false,
        message: "Not authorized",
      });
    }

    const newDisableLoginFlag = !user.disable_login_flag;

    const result = await toggleLoginDisabledFlag(
      userId,
      projectId,
      newDisableLoginFlag,
    );
    if (result.affectedRows === 0) {
      return res.status(400).json({
        success: false,
        error: "Failed to toggle the disable login flag",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User login flag updated",
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      error: "Server error, please try again later",
    });
  }
}

async function updateProjectNameHandler(req, res) {
  try {
    const projectId = req.params.projectId;
    const projectName = req.body.name;

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
    const result = await updateProjectName(project.project_id, projectName);

    if (result.affectedRows === 0) {
      return res.status(400).json({
        success: false,
        error: "Failed to update project title",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Project updated successfully",
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      error: "Server error, please try again later",
    });
  }
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

    // Checks if organization own the project
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

async function createProjectHandler(req, res) {
  try {
    const organizationId = req.user.id;

    const projectName = req.body.name;
    if (!projectName) {
      return res.status(400).json({
        success: false,
        error: "Project name is required.",
      });
    }

    const { apiKey } = generateApiKey();

    await createProject(projectName, apiKey, organizationId);

    return res.status(200).json({
      success: true,
      message: "Project created successfully.",
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
  getUsersPerProjectHandler,
  getAllProjectsHandler,
  regenerateProjectKeysHandler,
  deleteProjectHandler,
  toggleDisableLoginFlagHandler,
  updateProjectNameHandler,
  createProjectHandler,
};
