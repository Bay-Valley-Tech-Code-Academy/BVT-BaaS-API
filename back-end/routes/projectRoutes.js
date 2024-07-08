const express = require("express");
const router = express.Router();
const validate = require("../middleware/validate");
const {
  getUsersByProjectIdSchema,
  regenerateProjectKeysSchema,
  toggleDisableLoginSchema,
  updateProjectNameSchema,
} = require("../schemas/project.schema");

const {
  getUsersByProjectIdHandler,
  getAllProjectsHandler,
  regenerateProjectKeysHandler,
  toggleDisableLoginFlagHandler,
  updateProjectNameHandler,
} = require("../controllers/project.controller");

router.get(
  "/:projectId/keys/regenerate",
  validate(regenerateProjectKeysSchema),
  regenerateProjectKeysHandler
);

router.patch(
  "/:projectId/users/:userId/toggle-disable-login",
  validate(toggleDisableLoginSchema),
  toggleDisableLoginFlagHandler
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
