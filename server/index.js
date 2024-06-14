// server/index.js

const express = require("express");
require("dotenv").config();
const vendedorRoutes = require("./routes/vendedorRoutes");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3001;

// Middleware para parsear JSON
app.use(cors());
app.use(express.json());
app.use("/api", vendedorRoutes);

// Rota de exemplo para testar o servidor
app.get("/", (req, res) => {
  res.send("Servidor Node.js está funcionando!");
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
