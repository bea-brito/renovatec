// server/routes/vendedorRoutes.js

const express = require("express");
const router = express.Router();
const vendedorController = require("../controllers/vendedorController");

// Rota para buscar vendedor por ID
router.get("/vendedor/:userId", vendedorController.getVendedorByID);

// Rota para buscar todos os vendedores
router.get("/vendedor", vendedorController.getVendedor);

module.exports = router;
