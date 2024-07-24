const express = require("express");
const { getAuditHandler } = require("../controllers/audit.controller");
const router = express.Router();

router.get("/", getAuditHandler);

module.exports = router;
