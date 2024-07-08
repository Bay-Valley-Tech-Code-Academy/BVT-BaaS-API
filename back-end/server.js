const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const {
  authRoutes,
  organizationRoutes,
  userRoutes,
  projectRoutes,
} = require("./routes");
function createServer() {
  // Allows us to access the .env

  const app = express();

  const corsOptions = {
    origin: "*",
    credentials: true,
    "access-control-allow-credentials": true,
    optionSuccessStatus: 200,
  };
  app.use(cors(corsOptions));
  app.use(bodyParser.json());

  app.use("/api/organizations", organizationRoutes);
  app.use("/api/users", userRoutes);
  app.use("/api/auth", authRoutes);
  app.use("/api/projects", projectRoutes);
  return app;
}

module.exports = { createServer };
