const express = require("express");
const router = express.Router();
const validate = require("../middleware/validate");
const requireAuth = require("../middleware/requireAuth");
const {
  createOrganizationHandler,
} = require("../controllers/organization.controller");

const { createOrganizationSchema } = require("../schemas/organization.schema");

router.post(
  "/signup",
  validate(createOrganizationSchema),
  createOrganizationHandler
);

// router.get("/", getCarsHandler);
// router.get("/:carId", [requireAuth, validate(getCarSchema)], getCarHandler);

// router.put("/:carId", validate(updateCarSchema), updateCarHandler);

module.exports = router;
