const express = require("express");
const router = express.Router();
const validate = require("../middleware/validate");
const {
  getUsersByProjectIdSchema,
  regenerateProjectKeysSchema,
  deleteProjectSchema,
  updateProjectNameSchema,
} = require("../schemas/project.schema");

const {
  getUsersByProjectIdHandler,
  getAllProjectsHandler,
  regenerateProjectKeysHandler,
  deleteProjectHandler,
  updateProjectNameHandler,
} = require("../controllers/project.controller");
const requireAuth = require("../middleware/requireAuth");

router.get(
  "/:projectId/users",
  validate(getUsersByProjectIdSchema),
  getUsersByProjectIdHandler,
);

router.get("/", getAllProjectsHandler);

router.get(
  "/:projectId/keys/regenerate",
  validate(regenerateProjectKeysSchema),
  regenerateProjectKeysHandler,
);

router.delete(
  "/:projectId",
  requireAuth,
  validate(deleteProjectSchema),
  deleteProjectHandler,
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
