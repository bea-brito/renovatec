import supabase from "../supabaseClient.js";

export const insertCliente = (
  nome,
  CPF,
  telefone,
  logradouro,
  numero,
  complemento,
  bairro,
  CEP,
  cidade,
  UF,
  ID_Vendedor
) => {
  return supabase.from("Cliente").insert({
    nome: nome,
    CPF: CPF,
    telefone: telefone,
    logradouro: logradouro,
    numero: numero,
    complemento: complemento,
    bairro: bairro,
    CEP: CEP,
    cidade: cidade,
    UF: UF,
    ID_Vendedor: ID_Vendedor,
  });
};

export const deleteClienteById = (id) => {
  return supabase.from("Cliente").delete().eq("id", id);
};

export const getClienteWithVendedor = (vendedorId) => {
  return supabase.from("Cliente").select("*").eq("ID_Vendedor", vendedorId);
};

export const getClienteById = (id) => {
  return supabase.from("Cliente").select("*").eq("id", id);
};

export const updateCliente = (id, clienteData) => {
  return supabase.from("Cliente").update(clienteData).eq("id", id);
};