const express = require("express");
const router = express.Router();
const validate = require("../middleware/validate");
const {
  getUsersByProjectIdSchema,
  regenerateProjectKeysSchema,
  updateProjectNameSchema,
} = require("../schemas/project.schema");

const {
  getUsersByProjectIdHandler,
  getAllProjectsHandler,
  regenerateProjectKeysHandler,
  updateProjectNameHandler,
} = require("../controllers/project.controller");

router.get(
  "/:projectId/keys/regenerate",
  validate(regenerateProjectKeysSchema),
  regenerateProjectKeysHandler
);
router.get(
  "/:projectId/users",
  validate(getUsersByProjectIdSchema),
  getUsersByProjectIdHandler
);
router.patch(
  "/:projectId/name",
  validate(updateProjectNameSchema),
  updateProjectNameHandler
);
router.get("/", getAllProjectsHandler);
module.exports = router;
