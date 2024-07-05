const express = require("express");
const router = express.Router();
const validate = require("../middleware/validate");
const requireAuth = require("../middleware/requireAuth");
const {
  createOrganizationHandler,
  loginOrganizationHandler,
  deleteOrganizationHandler
} = require("../controllers/organization.controller");

const {
  createOrganizationSchema,
  loginOrganizationSchema,
  deleteOrganizationSchema,
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

router.delete(
  "/:organizationId",
  requireAuth,
  validate(deleteOrganizationSchema),
  deleteOrganizationHandler
);

// router.get("/", getCarsHandler);
// router.get("/:carId", [requireAuth, validate(getCarSchema)], getCarHandler);

// router.put("/:carId", validate(updateCarSchema), updateCarHandler);

module.exports = router;
