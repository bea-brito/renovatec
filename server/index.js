// server/index.js

const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware para parsear JSON
app.use(express.json());

// Exemplo de rota
app.get("/api/data", async (req, res) => {
  try {
    const { data, error } = await supabase.from("your_table").select("*");

    if (error) {
      throw error;
    }

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data from Supabase:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Rota de exemplo para testar o servidor
app.get("/", (req, res) => {
  res.send("Servidor Node.js está funcionando!");
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
