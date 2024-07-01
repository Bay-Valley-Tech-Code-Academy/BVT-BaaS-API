const express = require("express");
const router = express.Router();
const validate = require("../middleware/validate");
const {
  createUserHandler,
  loginUserHandler,
} = require("../controllers/user.controller");

const { createUserSchema, loginUserSchema } = require("../schemas/user.schema");

router.post("/signup", validate(createUserSchema), createUserHandler);
router.post("/login", validate(loginUserSchema), loginUserHandler);

module.exports = router;
