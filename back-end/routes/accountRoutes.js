const express = require("express");
const router = express.Router();

const { getAccountHandler } = require("../controllers/account.controller");

router.get("/", getAccountHandler);

module.exports = router;
