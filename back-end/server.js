const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const {
  authRoutes,
  organizationRoutes,
  userRoutes,
  projectRoutes,
  accountRoutes,
} = require("./routes");

function createServer() {
  // Allows us to access the .env

  const app = express();

  const corsOptions = {
    origin: "http://localhost:5173", // Replace with your frontend URL
    credentials: true, // Enable sending cookies from the frontend
  };
  app.use(cors(corsOptions));
  app.use(bodyParser.json());
  app.use(cookieParser());

  app.use("/api/organizations", organizationRoutes);
  app.use("/api/account", accountRoutes);
  app.use("/api/users", userRoutes);
  app.use("/api/auth", authRoutes);
  app.use("/api/projects", projectRoutes);
  return app;
}

module.exports = { createServer };
