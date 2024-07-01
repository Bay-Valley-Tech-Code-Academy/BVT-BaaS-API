const express = require("express");
const router = express.Router();
const validate = require("../middleware/validate");

const { getUsersByProjectIdSchema } = require("../schemas/project.schema");
const {
  getUsersByProjectIdHandler,
} = require("../controllers/project.controller");

router.get(
  "/:projectId/users",
  validate(getUsersByProjectIdSchema),
  getUsersByProjectIdHandler
);
module.exports = router;
