const jwt = require("jsonwebtoken");
const { generateAccessToken } = require("../lib/auth");

function requireAuth(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      req.user = decoded;
      return next();
    } catch (error) {
      console.log("Invalid access token");
    }
  }

  // If token is missing or invalid, check for refresh token
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) {
    return res.status(401).json({ error: "Access denied, token missing!" });
  }

  try {
    const decodedRefreshToken = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );
    console.log(decodedRefreshToken);
    // const newAccessToken = jwt.sign(
    //   { id: decodedRefreshToken.id },
    //   process.env.ACCESS_TOKEN_SECRET,
    //   { expiresIn: "15m" }
    // );

    // Set the new access token in the response header
    // res.setHeader("Authorization", `Bearer ${newAccessToken}`);
    // req.user = jwt.verify(newAccessToken, process.env.ACCESS_TOKEN_SECRET);
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid refresh token" });
  }
}

module.exports = requireAuth;
