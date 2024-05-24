import supabase from "../supabaseClient.js";

export const insetCliente = (
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
