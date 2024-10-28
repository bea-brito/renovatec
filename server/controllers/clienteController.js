// controllers/clienteController.js
const supabase = require("../supabaseClient");

exports.insertCliente = async (req, res) => {
  const {
    nome,
    CPF,
    telefone,
    email,
    logradouro,
    numero,
    complemento,
    bairro,
    CEP,
    cidade,
    UF,
    ID_Vendedor,
  } = req.body;
  try {
    const response = await supabase.from("Cliente").insert({
      nome,
      CPF,
      telefone,
      email,
      logradouro,
      numero,
      complemento,
      bairro,
      CEP,
      cidade,
      UF,
      ID_Vendedor,
    });
    const { data, error } = response;

    if (error) throw error;
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getCliente = async (req, res) => {
  try {
    const response = await supabase.from("Cliente").select();
    const { data, error } = response;

    if (error) throw error;
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getClienteById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await supabase
      .from("Cliente")
      .select()
      .eq("ID_Cliente", id);
    const { data, error } = response;

    if (error) throw error;
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getClienteWithVendedor = async (req, res) => {
  try {
    const response = await supabase
      .from("Cliente")
      .select(
        "ID_Cliente,nome,CPF,telefone,email,logradouro,numero,complemento,bairro,CEP,cidade,UF, Vendedor(nome)"
      );
    const { data, error } = response;

    if (error) throw error;
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteClienteById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await supabase
      .from("Cliente")
      .delete()
      .eq("ID_Cliente", id);
    const { data, error } = response;

    if (error) throw error;
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateCliente = async (req, res) => {
  const { id } = req.params;
  const {
    nome,
    CPF,
    telefone,
    email,
    logradouro,
    numero,
    complemento,
    bairro,
    CEP,
    cidade,
    UF,
    ID_Vendedor,
  } = req.body;
  try {
    const response = await supabase
      .from("Cliente")
      .update({
        nome,
        CPF,
        telefone,
        email,
        logradouro,
        numero,
        complemento,
        bairro,
        CEP,
        cidade,
        UF,
        ID_Vendedor,
      })
      .eq("ID_Cliente", id);
    const { data, error } = response;

    if (error) throw error;
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
