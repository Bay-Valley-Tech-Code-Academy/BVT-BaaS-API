const bcrypt = require("bcrypt");
const { generateUserRefreshToken } = require("../lib/auth");
const { createUser, getUser } = require("../services/user.services");
const { getProject } = require("../services/projects.services");
const {
  updateOrCreateRefreshToken,
} = require("../services/refreshToken.services");

async function createUserHandler(req, res) {
  try {
    const project = await getProject(req.headers.api_key);

    // If we don't find an project with that apiKey we throw a bad response
    if (!project) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized access, api key is invalid",
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

    const refreshToken = generateUserRefreshToken(userPayload, project.secret);
    const newExpirationDate = new Date();
    newExpirationDate.setDate(newExpirationDate.getDate() + 7);

    await updateOrCreateRefreshToken(
      userPayload.id,
      refreshToken,
      newExpirationDate
    );

    return res.status(201).json({
      success: true,
      data: {
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

async function loginUserHandler(req, res) {
  try {
    const project = await getProject(req.headers.api_key);

    // If we don't find an project with that apiKey we throw a bad response
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
    };

    const refreshToken = generateUserRefreshToken(userPayload, project.secret);
    const newExpirationDate = new Date();
    newExpirationDate.setDate(newExpirationDate.getDate() + 7);

    await updateOrCreateRefreshToken(
      userPayload.id,
      refreshToken,
      newExpirationDate
    );
    return res.status(200).json({
      success: true,
      data: {
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
  loginUserHandler,
};
