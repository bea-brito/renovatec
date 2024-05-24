import supabase from "../supabaseClient.js";

export const insertCliente = (
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
  ID_Vendedor
) => {
  return supabase.from("Cliente").insert({
    nome: nome,
    CPF: CPF,
    telefone: telefone,
    email: email,
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
