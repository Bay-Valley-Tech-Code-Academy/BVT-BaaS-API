require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { organizationRoutes, userRoutes, projectRoutes } = require("./routes");
const app = express();
const port = process.env.PORT || 4000; // default port to listen
const db = require("./db")

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
app.use("/api/projects", projectRoutes);

app.listen(port, async () => {
  console.log(`server started at http://localhost:${port}`);
});
