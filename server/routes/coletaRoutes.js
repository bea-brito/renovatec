// routes/coletaRoutes.js
const express = require("express");
const {
  insertColeta,
  getColeta,
  getColetaWithCliente,
  deleteColetaById,
} = require("../controllers/coletaController");

const router = express.Router();

router.post("/coletas", insertColeta);
router.get("/coletas", getColeta);
router.get("/coletas-with-cliente", getColetaWithCliente);
router.delete("/coletas-deletar/:id", deleteColetaById);

module.exports = router;
