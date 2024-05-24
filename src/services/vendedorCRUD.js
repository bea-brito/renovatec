import supabase from "../supabaseClient.js";

export const getVendedorByID = async (userId) => {
  return await supabase.from("Vendedor").select().eq("auth_ID", userId);
};

export const getVendedor = async () => {
  return await supabase.from("Vendedor").select();
};
