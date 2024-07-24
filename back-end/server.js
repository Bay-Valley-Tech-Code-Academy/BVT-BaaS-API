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
const requireAuth = require("./middleware/requireAuth");

function createServer() {
  // Allows us to access the .env

  const app = express();

  const allowedOrigins = ["http://localhost:5173"];

  const corsOptions = {
    origin: (origin, callback) => {
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    allowedHeaders: "Content-Type,Authorization",
  };
  app.use(cors(corsOptions));
  app.use(bodyParser.json());
  app.use(cookieParser());

  app.use("/api/organizations", organizationRoutes);
  app.use("/api/account", requireAuth, accountRoutes);
  app.use("/api/users", userRoutes);
  app.use("/api/auth", authRoutes);
  app.use("/api/projects", requireAuth, projectRoutes);
  return app;
}

module.exports = { createServer };
