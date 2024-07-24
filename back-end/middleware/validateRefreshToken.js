const { TokenExpiredError } = require("jsonwebtoken");
const { decodeToken } = require("../lib/auth");
const { getProjectByApiKey } = require("../services/projects.services");
const { getRefreshToken } = require("../services/refreshToken.services");
const { getUserById } = require("../services/user.services");

/*
 When we regenerate a project apiKey and secret.  If a request comes with an old apiKey it will fail because there is no project associated with that apiKey. If there is an apiKey and secret, it will fail because the refreshToken was signed with the old secret and so it will fail when trying to decode the token.
*/

const validateRefreshToken = async (req, res, next) => {
  const { api_key, refresh_token } = req.headers;

  try {
    const [refreshToken, project] = await Promise.all([
      getRefreshToken(refresh_token),
      getProjectByApiKey(api_key),
    ]);

    if (!refreshToken) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid refresh token" });
    }
    // Either apiKey or refreshToken is invalid.
    if (!project) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid API key" });
    }

    // Ensure that the refresh token is for this project.
    if (project.project_id !== refreshToken.project_id) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized access",
      });
    }

    // Check if this user is not diabled

    /* 
      This can fail in either two ways.
      1. The refreshToken is expired
      2. The token was not signed with the project secret, this can happen when we regenerate the apiKeys
    */
    const decoded = decodeToken(
      refreshToken.token,
      process.env.PROJECT_REFRESH_TOKEN_SECRET
    );

    const user = await getUserById(decoded.id);
    // check if they are disabled
    if (!user || user.disable_login_flag) {
      return res.status(403).json({
        success: false,
        message: "Your account has been disabled.",
      });
    }

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
