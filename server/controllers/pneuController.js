// controllers/pneuController.js
const supabase = require("../supabaseClient");

exports.insertPneu = async (req, res) => {
  const {
    codigo_pneu,
    matricula,
    tamanho,
    marca,
    modelo,
    DOT,
    servico,
    valor,
    ID_Coleta,
  } = req.body;
  try {
    const response = await supabase.from("Pneu").insert({
      codigo_pneu,
      matricula,
      tamanho,
      marca,
      modelo,
      DOT,
      servico,
      valor,
      status: "Recebido",
      ID_Coleta,
      Etapa_Producao: "ExameInicial",
    });

    if (response.error) {
      console.error("Error in insertPneu:", response.error);
      throw response.error;
    }

    res.status(201).json(response);
  } catch (error) {
    console.error("Caught error in insertPneu:", error.message);
    res.status(400).json({ error: error.message });
  }
};

exports.getPneuByColeta = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await supabase.from("Pneu").select().eq("ID_Coleta", id);
    const { data, error } = response;

    if (error) throw error;
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updatePneu = async (req, res) => {
  const { id } = req.params;
  const {
    codigo_pneu,
    matricula,
    tamanho,
    marca,
    modelo,
    DOT,
    servico,
    valor,
    ID_Coleta,
  } = req.body;
  try {
    const response = await supabase
      .from("Pneu")
      .update({
        codigo_pneu,
        matricula,
        tamanho,
        marca,
        modelo,
        DOT,
        servico,
        valor,
        status: "Recebido",
        ID_Coleta,
      })
      .eq("ID_Pneu", id);
    const { data, error } = response;

    if (error) throw error;
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
