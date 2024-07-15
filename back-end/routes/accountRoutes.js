const express = require("express");
const router = express.Router();

const validate = require("../middleware/validate");
const { authSchema } = require("../schemas/auth.schema");
const { authHandler } = require("../controllers/auth.controller");
const { getAccountHandler } = require("../controllers/account.controller");

router.get("/", getAccountHandler);

module.exports = router;
