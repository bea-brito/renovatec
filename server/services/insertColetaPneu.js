import supabase from "../supabaseClient.js";

export const insertColetaPneu = (p_data, p_id_cliente, p_pneus) => {
  return supabase.rpc("criar_coleta_e_pneus", {
    p_status: "Recebido",
    p_data: p_data,
    p_id_cliente: p_id_cliente,
    p_pneus: p_pneus,
  });
};
