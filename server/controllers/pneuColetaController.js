// controllers/coletaController.js
const supabase = require("../supabaseClient");

exports.insertColetaPneu = async (req, res) => {
  const { p_data, p_id_cliente, p_pneus } = req.body;
  try {
    const response = await supabase.rpc("criar_coleta_e_pneus", {
      p_status: "Recebido",
      p_data,
      p_id_cliente,
      p_pneus,
    });

    const { data, error } = response;

    if (error) {
      console.error("Error in insertColetaPneu RPC:", error);
      throw error;
    }

    res.status(201).json(response);
  } catch (error) {
    console.error("Caught error in insertColetaPneu:", error.message);
    res.status(400).json({ error: error.message });
  }
};
