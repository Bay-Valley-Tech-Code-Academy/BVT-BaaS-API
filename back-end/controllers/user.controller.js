const bcrypt = require("bcrypt");
const {
  generateUserRefreshToken,
  generateUserAccessToken,
} = require("../lib/auth");
const {
  createUser,
  getUserByEmail,
  deleteUser,
  getUserById,
} = require("../services/user.services");
const {
  getProjectByApiKey,
  getProjectById,
} = require("../services/projects.services");
const {
  updateOrCreateRefreshToken,
} = require("../services/refreshToken.services");
const { createAudit } = require("../services/audit.services");

async function createUserHandler(req, res) {
  try {
    const project = await getProjectByApiKey(req.headers.api_key);
    if (!project) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized access, invalid API key",
      });
    }
    const user = await getUserByEmail(req.body.email, project.project_id);
    if (user) {
      return res.status(409).json({
        success: false,
        message: "User with this email already exist for this project.",
      });
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const data = await createUser({
      ...req.body,
      password: hashedPassword,
      projectId: project.project_id,
    });

    if (data.affectedRows === 0) {
      throw new Error("User creation failed");
    }

    const userPayload = {
      id: data.insertId,
      email: req.body.email,
    };
    const accessToken = generateUserAccessToken(
      userPayload,
      process.env.PROJECT_ACCESS_TOKEN_SECRET
    );
    const refreshToken = generateUserRefreshToken(
      userPayload,
      process.env.PROJECT_REFRESH_TOKEN_SECRET
    );
    const newExpirationDate = new Date();
    newExpirationDate.setDate(newExpirationDate.getDate() + 7);

    const refreshTokenPromise = updateOrCreateRefreshToken(
      userPayload.id,
      project.project_id,
      refreshToken,
      newExpirationDate
    );

    const auditPromise = createAudit({
      projectId: project.project_id,
      userId: userPayload.id,
      auditType: "login_successful",
      ipAddress: req.ip === "::1" ? "127.0.0.1" : req.ip,
    });
    await Promise.all([refreshTokenPromise, auditPromise]);
    return res.status(201).json({
      success: true,
      data: {
        accessToken,
        refreshToken,
        user: {
          id: userPayload.id,
          email: user.email,
        },
      },
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      error: "Server error, please try again later",
    });
  }
}

async function deleteUserHandler(req, res) {
  try {
    const { userId, projectId } = req.params;
    const requestingUser = req.user;

    // Fetch the user and project
    const [user, project] = await Promise.all([
      getUserById(userId),
      getProjectById(projectId),
    ]);

    if (!user) {
      return res.status(404).json({
        success: false,
        error: "User not found",
      });
    }
    if (!project) {
      return res.status(404).json({
        success: false,
        error: "Project not found",
      });
    }

    // Validate the organization ownership
    if (requestingUser.id !== project.organization_id) {
      return res.status(403).json({
        success: false,
        error: "Organization does not have access to this project.",
      });
    }

    // Validate the user belongs to the project
    if (project.project_id !== user.project_id) {
      return res.status(403).json({
        success: false,
        error: "User does not exist in this project.",
      });
    }

    // Delete the user
    const result = await deleteUser(userId);
    if (result.affectedRows === 0) {
      return res.status(400).json({
        success: false,
        error: "Failed to delete user",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting user:", error);
    return res.status(500).json({
      success: false,
      error: "Server error, please try again later",
    });
  }
}

async function loginUserHandler(req, res) {
  try {
    const project = await getProjectByApiKey(req.headers.api_key);

    // If we don't find an project with that apiKey we throw a bad response
    if (!project) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized access, api key is invalid",
      });
    }

    // we check if the user exist
    const user = await getUserByEmail(req.body.email, project.project_id);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    if (user.disable_login_flag) {
      return res.status(403).json({
        success: false,
        message: "Access denied. Your account has been disabled.",
      });
    }

    // if the user exist make sure he belongs to the project
    if (user.project_id !== project.project_id) {
      return res.status(403).json({
        success: false,
        message:
          "Access denied. You do not have permission to access this project.",
      });
    }
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) {
      await createAudit({
        projectId: project.project_id,
        userId: user.user_id,
        auditType: "login_failed",
        ipAddress: req.ip === "::1" ? "127.0.0.1" : req.ip,
      });

      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    const userPayload = {
      id: user.user_id,
      email: user.email,
      project_id: user.project_id,
    };
    const accessToken = generateUserAccessToken(
      userPayload,
      process.env.PROJECT_ACCESS_TOKEN_SECRET
    );
    const refreshToken = generateUserRefreshToken(
      userPayload,
      process.env.PROJECT_REFRESH_TOKEN_SECRET
    );
    const newExpirationDate = new Date();
    newExpirationDate.setDate(newExpirationDate.getDate() + 7);

    const refreshTokenPromise = updateOrCreateRefreshToken(
      userPayload.id,
      project.project_id,
      refreshToken,
      newExpirationDate
    );
    const auditPromise = createAudit({
      projectId: project.project_id,
      userId: user.user_id,
      auditType: "login_successful",
      ipAddress: req.ip === "::1" ? "127.0.0.1" : req.ip,
    });
    await Promise.all([refreshTokenPromise, auditPromise]);
    return res.status(200).json({
      success: true,
      data: {
        accessToken,
        refreshToken,
        user: {
          id: userPayload.id,
          email: user.email,
        },
      },
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Server error, please try again later",
    });
  }
}

module.exports = {
  createUserHandler,
  deleteUserHandler,
  loginUserHandler,
};
