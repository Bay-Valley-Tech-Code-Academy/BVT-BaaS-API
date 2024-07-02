const bcrypt = require("bcrypt");
const {
  generateUserRefreshToken,
  generateUserAccessToken,
} = require("../lib/auth");
const {
  createUser,
  getUser,
  deleteUser,
  getUserById,
} = require("../services/user.services");
const { getProject } = require("../services/projects.services");

async function createUserHandler(req, res) {
  try {
    const project = await getProject(req.headers.project_id);
    if (!project) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized access, project_id is invalid",
      });
    }

    // We want to ensure that the project doesn't already have this user
    const user = await getUser(req.body.email);
    if (user && user.project_id === project.project_id) {
      return res.status(409).json({
        success: false,
        message:
          "A user with this email already exists for the specified project.",
      });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const data = await createUser({
      ...req.body,
      password: hashedPassword,
      projectId: project.project_id,
    });

    if (data.affectedRows === 0) {
      throw new Error();
    }

    const userPayload = {
      id: data.insertId,
      email: req.body.email,
    };
    const accessToken = generateUserAccessToken(userPayload, project.secret);
    const refreshToken = generateUserRefreshToken(userPayload, project.secret);

    return res.status(201).json({
      success: true,
      data: {
        accessToken,
        refreshToken,
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
    const { userId } = req.params;
    const requestingUser = req.user;

    if (requestingUser.id !== parseInt(userId, 10)) {
      return res.status(403).json({
        success: false,
        error: "Unauthorized access",
      });
    }

    const user = await getUserById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        error: "User not found",
      });
    }

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
    const project = await getProject(req.headers.project_id);
    if (!project) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized access, api key is invalid",
      });
    }

    // we check if the user exist
    const user = await getUser(req.body.email);
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
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
    const accessToken = generateUserAccessToken(userPayload, project.secret);
    const refreshToken = generateUserRefreshToken(userPayload, project.secret);

    return res.status(200).json({
      success: true,
      data: {
        accessToken,
        refreshToken,
      },
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      error: "Server error, please try again later",
    });
  }
}

module.exports = {
  createUserHandler,
  deleteUserHandler,
  loginUserHandler,
};
