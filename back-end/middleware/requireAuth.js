const jwt = require("jsonwebtoken");
const { generateAccessToken } = require("../lib/auth");

function requireAuth(req, res, next) {
  const token = req.headers.Authorization?.split(" ")[1];

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      req.user = decoded;
      return next();
    } catch (error) {
      console.log("Invalid access token");
    }
  }
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) {
    return res.status(401).json({ error: "Access denied, token missing!" });
  }
  try {
    const decodedRefreshToken = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    const payload = {
      id: decodedRefreshToken.id,
      email: decodedRefreshToken.email,
      name: decodedRefreshToken.name,
    };
    const newAccessToken = generateAccessToken(payload);

    res.setHeader("Authorization", `Bearer ${newAccessToken}`);
    req.user = payload;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid refresh token" });
  }
}

module.exports = requireAuth;
