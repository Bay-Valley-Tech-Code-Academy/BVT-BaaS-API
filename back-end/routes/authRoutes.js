const express = require("express");
const router = express.Router();

const validateRefreshToken = require("../middleware/validateRefreshToken");
const validate = require("../middleware/validate");
const { authSchema, updateSelfSchema } = require("../schemas/auth.schema");
const { authHandler, updateSelfHandler } = require("../controllers/auth.controller");

router.get("/self", [validate(authSchema), validateRefreshToken], authHandler);
router.put("/self", validate(updateSelfSchema), updateSelfHandler);

module.exports = router;
