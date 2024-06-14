// routes/pneuRoutes.js
const express = require("express");
const { insertPneu } = require("../controllers/pneuController");

const router = express.Router();

router.post("/pneus", insertPneu);

module.exports = router;
