const express = require("express");
const router = express.Router();
const validate = require("../middleware/validate");
const requireAuth = require("../middleware/requireAuth");
const {
  createOrganizationHandler,
  loginOrganizationHandler,
} = require("../controllers/organization.controller");

const {
  createOrganizationSchema,
  loginOrganizationSchema,
} = require("../schemas/organization.schema");

router.post(
  "/signup",
  validate(createOrganizationSchema),
  createOrganizationHandler
);

router.post(
  "/login",
  validate(loginOrganizationSchema),
  loginOrganizationHandler
);

// router.get("/", getCarsHandler);
// router.get("/:carId", [requireAuth, validate(getCarSchema)], getCarHandler);

// router.put("/:carId", validate(updateCarSchema), updateCarHandler);

module.exports = router;
