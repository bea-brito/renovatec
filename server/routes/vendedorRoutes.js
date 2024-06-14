const express = require("express");
const {
  getVendedorByID,
  getVendedor,
} = require("../controllers/vendedorController");

const router = express.Router();

router.get("/vendedores/:userId", getVendedorByID);
router.get("/vendedores", getVendedor);

module.exports = router;
