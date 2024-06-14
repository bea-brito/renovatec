const { Router } = require("express");
const router = Router();
const supabase = require("../supabaseClient"); // Importe o cliente do Supabase

// Rota para buscar vendedor por ID
const getVendedorByID = async (req, res) => {
  const userId = req.params.userId;

  try {
    const { data, error } = await supabase
      .from("Vendedor")
      .select()
      .eq("auth_ID", userId);

    if (error) {
      throw error;
    }

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching vendedor by ID:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Rota para buscar todos os vendedores
const getVendedor = async (req, res) => {
  try {
    const { data, error } = await supabase.from("Vendedor").select();
    console.log(data);
    if (error) {
      throw error;
    }

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    console.error("Error fetching all vendedores:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getVendedor,
  getVendedorByID,
};
