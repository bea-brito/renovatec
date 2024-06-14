// routes/pneuRoutes.js
const express = require("express");
const {
  insertPneu,
  getPneuByColeta,
  updatePneu,
} = require("../controllers/pneuController");

const router = express.Router();

router.post("/pneus", insertPneu);
router.get("/pneus-by-coleta/:id", getPneuByColeta);
router.put("/pneus/:id", updatePneu);

module.exports = router;
