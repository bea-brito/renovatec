// controllers/vendedorController.js
const supabase = require("../supabaseClient");

exports.getVendedorByID = async (req, res) => {
  const { userId } = req.params;
  try {
    const response = await supabase
      .from("Vendedor")
      .select()
      .eq("auth_ID", userId);

    const { data, error } = response;

    if (error) {
      console.error("Error in getVendedorByID:", error.message);
      throw error;
    }

    res.status(201).json(response);
  } catch (error) {
    console.error("Caught error in getVendedorByID:", error.message);
    res.status(400).json({ error: error.message });
  }
};

exports.getVendedor = async (req, res) => {
  try {
    const response = await supabase.from("Vendedor").select();
    const { data, error } = response;

    if (error) {
      console.error("Error in getVendedor:", error.message);
      throw error;
    }

    res.status(201).json(response);
  } catch (error) {
    console.error("Caught error in getVendedor:", error.message);
    res.status(400).json({ error: error.message });
  }
};
