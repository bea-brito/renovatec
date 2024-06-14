import supabase from "../supabaseClient.js";

export const getVendedorByID = async (userId) => {
  try {
    const response = await fetch(
      `http://localhost:3001/api/vendedor/${userId}`
    );

    if (!response.ok) {
      throw new Error("Erro ao buscar vendedor");
    }
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar vendedor:", error.message);
    throw error;
  }
};

export const getVendedor = async () => {
  return await supabase.from("Vendedor").select();
};
