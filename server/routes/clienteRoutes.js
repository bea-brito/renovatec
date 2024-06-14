const express = require("express");
const {
  insertCliente,
  getCliente,
  getClienteById,
  getClienteWithVendedor,
  deleteClienteById,
  updateCliente,
} = require("../controllers/clienteController.js");

const router = express.Router();

router.post("/clientes", insertCliente);
router.get("/clientes", getCliente);
router.get("/clientes/:id", getClienteById);
router.get("/clientes-with-vendedor", getClienteWithVendedor);
router.delete("/clientes-deletar/:id", deleteClienteById);
router.put("/clientes/:id", updateCliente);

module.exports = router;
