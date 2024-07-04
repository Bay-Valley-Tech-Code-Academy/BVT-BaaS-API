const express = require("express");
const router = express.Router();
const validate = require("../middleware/validate");
const {
  getUsersByProjectIdSchema,
  regenerateProjectKeysSchema,
  toggleDisableLoginSchema,
} = require("../schemas/project.schema");

const {
  getUsersByProjectIdHandler,
  getAllProjectsHandler,
  regenerateProjectKeysHandler,
  toggleDisableLoginFlagHandler,
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

router.patch(
  "/:projectId/users/:userId/toggle-disable-login",
  validate(toggleDisableLoginSchema),
  toggleDisableLoginFlagHandler
);
module.exports = router;
