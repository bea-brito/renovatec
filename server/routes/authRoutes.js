const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/login", authController.login);
router.post("/signOut", authController.signOut);
router.post("/passwordReset", authController.passwordReset);

module.exports = router;
