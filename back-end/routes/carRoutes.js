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
  createCarSchema,
  getCarSchema,
  updateCarSchema,
} = require("../schemas/car.schema");

router.get("/", getCarsHandler);
router.get("/:carId", [requireAuth, validate(getCarSchema)], getCarHandler);

router.put("/:carId", validate(updateCarSchema), updateCarHandler);
router.post("/", validate(createCarSchema), createCarHandler);

module.exports = router;
