const express = require("express");
const router = express.Router();
const validate = require("../middleware/validate");
const {
  getUsersByProjectIdSchema,
  regenerateProjectKeysSchema,
} = require("../schemas/project.schema");
const {
  getUsersByProjectIdHandler,
  getAllProjectsHandler,
  regenerateProjectKeysHandler,
} = require("../controllers/project.controller");

router.get(
  "/:projectId/users",
  validate(getUsersByProjectIdSchema),
  getUsersByProjectIdHandler
);

router.get("/", getAllProjectsHandler);

router.get(
  "/:projectId/keys/regenerate",
  validate(regenerateProjectKeysSchema),
  regenerateProjectKeysHandler
);
module.exports = router;
