const express = require("express");
const router = express.Router();
const validate = require("../middleware/validate");

const { getUsersByProjectIdSchema } = require("../schemas/project.schema");
const {
  getUsersByProjectIdHandler,
  getAllProjectsHandler,
} = require("../controllers/project.controller");

router.get(
  "/:projectId/users",
  validate(getUsersByProjectIdSchema),
  getUsersByProjectIdHandler
);

router.get("/", getAllProjectsHandler);
module.exports = router;
