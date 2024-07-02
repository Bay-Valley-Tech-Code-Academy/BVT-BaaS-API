const jwt = require("jsonwebtoken");
const { getProject } = require("../services/projects.services");

async function requireAuth(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Access denied, token missing!" });
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
}

async function requireAuthUser(req, res, next) {
  const authHeader = req.headers.authorization;
  const projectId = req.headers["project_id"];

  if (!authHeader) {
    return res.status(401).json({ error: "Access denied, token missing!" });
  }

  if (!projectId) {
    return res.status(401).json({ error: "Project ID missing!" });
  }

  const token = authHeader.split(" ")[1]; // Bearer <token>
  if (!token) {
    return res.status(401).json({ error: "Access denied, token missing!" });
  }

  try {
    const project = await getProject(projectId);
    if (!project) {
      return res.status(401).json({ error: "Invalid Project ID" });
    }

    const decoded = jwt.verify(token, project.secret);
    req.user = decoded; // Attach the full user object to the request

    next();
  } catch (error) {
    console.error("Token verification error:", error);
    return res.status(401).json({ error: "Invalid token" });
  }
}

module.exports = { requireAuth, requireAuthUser };
