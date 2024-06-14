// routes/coletaRoutes.js
const express = require("express");
const {
  insertColeta,
  getColeta,
  getColetaWithCliente,
} = require("../controllers/coletaController");

const router = express.Router();

router.post("/coletas", insertColeta);
router.get("/coletas", getColeta);
router.get("/coletas-with-cliente", getColetaWithCliente);

module.exports = router;
