import supabase from "../supabaseClient.js";

export const getVendedor = async (userId) => {
  return await supabase.from("Vendedor").select().eq("auth_ID", userId);
};
