const express = require("express");
const router = express.Router();
const validate = require("../middleware/validate");
const { createUserHandler } = require("../controllers/user.controller");

const { createUserSchema } = require("../schemas/user.schema");
const requireApiKey = require("../middleware/requireApiKey");

router.post(
  "/signup",
  [validate(createUserSchema), requireApiKey],
  createUserHandler
);

module.exports = router;
