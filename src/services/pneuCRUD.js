import supabase from "../supabaseClient.js";

export const insertPneu = (
  codigo_pneu,
  matricula,
  tamanho,
  marca,
  modelo,
  DOT,
  servico,
  valor,
  ID_Coleta
) => {
  return supabase.from("Pneu").insert({
    codigo_pneu: codigo_pneu,
    matricula: matricula,
    tamanho: tamanho,
    marca: marca,
    modelo: modelo,
    DOT: DOT,
    servico: servico,
    valor: valor,
    status: "Recebido",
    ID_Coleta: ID_Coleta,
  });
};
