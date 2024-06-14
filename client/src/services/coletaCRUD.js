import supabase from "../supabaseClient.js";

export const insertColeta = (data, ID_Cliente) => {
  return supabase.from("Coleta").insert({
    status: "Recebido",
    data: data,
    ID_Cliente: ID_Cliente,
  });
};

export const getColeta = async () => {
  return await supabase.from("Coleta").select();
};
