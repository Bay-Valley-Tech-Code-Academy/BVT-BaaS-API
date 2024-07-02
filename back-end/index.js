require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { carRoutes, userRoutes, organizationRoutes,  } = require("./routes");
const auditRoutes = require('./routes/auditRoutes');
const db = require("./db");

// Allows us to access the .env

const app = express();
const port = process.env.SERVER_PORT || 4000; // default port to listen

const corsOptions = {
  origin: "*",
  credentials: true,
  "access-control-allow-credentials": true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(bodyParser.json());


// app.use("/api/cars", carRoutes);
app.use("/api/organizations", organizationRoutes);
app.use("/api/audits", auditRoutes);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, async () => {
  console.log(`server started at http://localhost:${port}`);
});
