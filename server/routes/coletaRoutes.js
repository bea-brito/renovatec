// routes/coletaRoutes.js
const express = require("express");
const { insertColeta, getColeta } = require("../controllers/coletaController");

const router = express.Router();

router.post("/coletas", insertColeta);
router.get("/coletas", getColeta);

module.exports = router;
