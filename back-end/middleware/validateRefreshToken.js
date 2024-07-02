const { TokenExpiredError } = require("jsonwebtoken");
const { decodeToken } = require("../lib/auth");
const { getProject } = require("../services/projects.services");
const { getRefreshToken } = require("../services/refreshToken.services");

const validateRefreshToken = async (req, res, next) => {
  const { api_key, refresh_token } = req.headers;
  try {
    const [refreshToken, project] = await Promise.all([
      getRefreshToken(refresh_token),
      getProject(api_key),
    ]);

    if (!refreshToken || !project) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    // The refresh token is not for this project
    if (project.project_id !== refreshToken.project_id) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized access",
      });
    }

    const decoded = decodeToken(refreshToken.token, project.secret);

    req.user = decoded;
    req.token = refreshToken.token;

    next();
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      return res
        .status(401)
        .json({ success: false, message: "Refresh token expired" });
    }
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = validateRefreshToken;
