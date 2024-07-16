const express = require("express");
const router = express.Router();
const validate = require("../middleware/validate");
const {
  getUsersByProjectIdSchema,
  regenerateProjectKeysSchema,
  deleteProjectSchema,
  toggleDisableLoginSchema,
  updateProjectNameSchema,
} = require("../schemas/project.schema");

const {
  getUsersPerProjectHandler,
  getAllProjectsHandler,
  regenerateProjectKeysHandler,
  deleteProjectHandler,
  toggleDisableLoginFlagHandler,
  updateProjectNameHandler,
} = require("../controllers/project.controller");
const requireAuth = require("../middleware/requireAuth");

router.get("/users", getUsersPerProjectHandler);

router.get("/", getAllProjectsHandler);

router.get(
  "/:projectId/keys/regenerate",
  validate(regenerateProjectKeysSchema),
  regenerateProjectKeysHandler
);

router.delete(
  "/:projectId",
  requireAuth,
  validate(deleteProjectSchema),
  deleteProjectHandler
);

router.patch(
  "/:projectId/users/:userId/toggle-disable-login",
  validate(toggleDisableLoginSchema),
  toggleDisableLoginFlagHandler
);

router.patch(
  "/:projectId/name",
  validate(updateProjectNameSchema),
  updateProjectNameHandler
);
router.get("/", getAllProjectsHandler);
module.exports = router;
