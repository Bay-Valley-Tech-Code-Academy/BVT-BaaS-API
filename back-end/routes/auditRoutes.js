const express = require("express");
const router = express.Router();
const validate = require("../middleware/validate");
const requireAuth = require("../middleware/requireAuth");
const {
  getAuditHandler
} = require("../controllers/audit.controller");
const {
  getAuditSchema
} = require("../schemas/audit.schema");

router.get("/:projectId", [requireAuth, validate(getAuditSchema)], getAuditHandler);

module.exports = router;


//given the route in this router.get, is my request in postman written correctly?