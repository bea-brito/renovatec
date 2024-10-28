const supabase = require("../supabaseClient");

exports.insertColeta = async (req, res) => {
  const { data, ID_Cliente } = req.body;
  try {
    const response = await supabase.from("Coleta").insert({
      status: "Recebido",
      data,
      ID_Cliente,
    });

    if (response.error) throw response.error;
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getColeta = async (req, res) => {
  try {
    const response = await supabase.from("Coleta").select();

    if (response.error) throw response.error;
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getColetaWithCliente = async (req, res) => {
  try {
    const response = await supabase
      .from("Coleta")
      .select("ID_Coleta,status,data,Cliente(nome)");
    const { data, error } = response;

    if (error) throw error;
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteColetaById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await supabase.from("Coleta").delete().eq("ID_Coleta", id);
    const { data, error } = response;

    if (error) throw error;
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
