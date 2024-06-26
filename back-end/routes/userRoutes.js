const express = require("express");
const router = express.Router();
const validate = require("../middleware/validate");
const { createUserHandler } = require("../controllers/user.controller");

const { createUserSchema } = require("../schemas/user.schema");

router.post("/signup", [validate(createUserSchema)], createUserHandler);

module.exports = router;
