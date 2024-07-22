const express = require("express");
const router = express.Router();
const validate = require("../middleware/validate");
const {
  regenerateProjectKeysSchema,
  deleteProjectSchema,
  toggleDisableLoginSchema,
  updateProjectNameSchema,
  createProjectSchema,
} = require("../schemas/project.schema");

const {
  getUsersPerProjectHandler,
  getAllProjectsHandler,
  regenerateProjectKeysHandler,
  deleteProjectHandler,
  toggleDisableLoginFlagHandler,
  updateProjectNameHandler,
  createProjectHandler,
} = require("../controllers/project.controller");

router.post("/", validate(createProjectSchema), createProjectHandler);

router.get("/users", getUsersPerProjectHandler);

router.get("/", getAllProjectsHandler);

router.get(
  "/:projectId/keys/regenerate",
  validate(regenerateProjectKeysSchema),
  regenerateProjectKeysHandler
);

router.delete(
  "/:projectId",
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
