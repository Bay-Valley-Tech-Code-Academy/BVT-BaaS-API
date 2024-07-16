const express = require("express");
const router = express.Router();
const validate = require("../middleware/validate");
const {
  createUserHandler,
  loginUserHandler,
  deleteUserHandler,
} = require("../controllers/user.controller");
const {
  createUserSchema,
  loginUserSchema,
  deleteUserSchema,
} = require("../schemas/user.schema");
const requireAuth = require("../middleware/requireAuth");
const checkProjectUserLimits = require("../middleware/checkProjectUserLimits");

router.post(
  "/signup",
  [validate(createUserSchema), checkProjectUserLimits],
  createUserHandler
);

router.post("/login", validate(loginUserSchema), loginUserHandler);

router.delete(
  "/:userId/projects/:projectId",
  requireAuth,
  validate(deleteUserSchema),
  deleteUserHandler
);

module.exports = router;
