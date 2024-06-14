// server/index.js

const express = require("express");
require("dotenv").config();
const vendedorRoutes = require("./routes/vendedorRoutes");
const authRoutes = require("./routes/authRoutes");
const clienteRoutes = require("./routes/clienteRoutes");
const coletaRoutes = require("./routes/coletaRoutes");
const pneuColetaRoutes = require("./routes/pneuColetaRoutes");
const pneuRoutes = require("./routes/pneuRoutes");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3001;

// Middleware para parsear JSON
app.use(cors());
app.use(express.json());
app.use("/api", vendedorRoutes);
app.use("/api", authRoutes);
app.use("/api", clienteRoutes);
app.use("/api", coletaRoutes);
app.use("/api", pneuRoutes);
app.use("/api", pneuColetaRoutes);

// Rota de exemplo para testar o servidor
app.get("/", (req, res) => {
  res.send("Servidor Node.js está funcionando!");
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
