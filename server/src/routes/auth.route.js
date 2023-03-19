const express = require("express");
const { authController } = require("../controllers");

const router = express.Router();

router.get("/", authController.login);

module.exports = router;
