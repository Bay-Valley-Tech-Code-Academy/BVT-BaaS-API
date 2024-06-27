const express = require("express");
const router = express.Router();
const validate = require("../middleware/validate");
const requireAuth = require("../middleware/requireAuth");
const {
  createCarHandler,
  getCarsHandler,
  getCarHandler,
  updateCarHandler,
} = require("../controllers/car.controller");
const {
  getAuditSchema
} = require("../schemas/audit.schema");



module.exports = router;
