const {
  getUsersByProjectId,
  getProjectById,
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

module.exports = {
  getUsersByProjectIdHandler,
};
