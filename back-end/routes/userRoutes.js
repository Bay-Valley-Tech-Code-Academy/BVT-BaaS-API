const express = require("express");
const router = express.Router();
const validate = require("../middleware/validate");
const requireProjectId = require("../middleware/requireProjectId");
const { requireAuth } = require("../middleware/requireAuth");
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

router.post(
  "/signup",
  requireProjectId,
  validate(createUserSchema),
  createUserHandler,
);

router.post(
  "/login",
  requireProjectId,
  validate(loginUserSchema),
  loginUserHandler,
);

router.delete(
  "/:userId",
  requireAuth,
  validate(deleteUserSchema),
  deleteUserHandler,
);

module.exports = router;
