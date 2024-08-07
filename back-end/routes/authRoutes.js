const express = require("express");
const router = express.Router();

const validateRefreshToken = require("../middleware/validateRefreshToken");
const validate = require("../middleware/validate");
const { authSchema } = require("../schemas/auth.schema");
const { authHandler } = require("../controllers/auth.controller");

router.get("/self", [validate(authSchema), validateRefreshToken], authHandler);

module.exports = router;
