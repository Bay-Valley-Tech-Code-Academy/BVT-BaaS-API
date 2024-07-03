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

router.post(
  "/signup",
  validate(createUserSchema),
  createUserHandler,
);

router.post(
  "/login",
  validate(loginUserSchema),
  loginUserHandler,
);

router.delete(
  "/:userId",
  validate(deleteUserSchema),
  deleteUserHandler,
);

module.exports = router;
