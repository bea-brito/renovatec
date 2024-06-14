// routes/pneuRoutes.js
const express = require("express");
const {
  insertPneu,
  getPneuByColeta,
} = require("../controllers/pneuController");

const router = express.Router();

router.post("/pneus", insertPneu);
router.get("/pneus-by-coleta/:id", getPneuByColeta);

module.exports = router;
