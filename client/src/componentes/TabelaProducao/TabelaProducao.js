import React, { useState, useEffect } from "react";
import supabase from "../../supabaseClient";

const TabelaProducao = () => {
  const [producoes, setProducoes] = useState([]);

  useEffect(() => {
    fetchProducoes();
  }, []);

  const fetchProducoes = async () => {
    try {
      const { data, error } = await supabase
        .from("Producao")
        .select("*");

      if (error) {
        console.error("Erro ao buscar produções:", error);
        return;
      }
      setProducoes(data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  return (
    <div className="overflow-x-auto max-w-full">
      <table className="min-w-full table-auto text-sm text-left text-gray-500 dark:text-gray-400 shadow-xl">
        <thead className="text-xs text-white uppercase bg-black dark:bg-blue-700">
          <tr>
            <th className="px-4 py-2">ID Pneu</th>
            <th className="px-4 py-2">Modelo</th>
            <th className="px-4 py-2">Exame Inicial</th>
            <th className="px-4 py-2">Exame Inicial Data</th>
            <th className="px-4 py-2">Raspa</th>
            <th className="px-4 py-2">Raspa Data</th>
            <th className="px-4 py-2">Escareação</th>
            <th className="px-4 py-2">Aplicação de Cola</th>
            <th className="px-4 py-2">Orbicushion</th>
            <th className="px-4 py-2">Corte de Banda</th>
            <th className="px-4 py-2">Aplicação de Banda</th>
            <th className="px-4 py-2">Montagem</th>
            <th className="px-4 py-2">Autoclave</th>
            <th className="px-4 py-2">Exame Final Data</th>
            <th className="px-4 py-2">Exame Final</th>
          </tr>
        </thead>
        <tbody>
          {producoes.map((producao) => (
            <tr key={producao.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
              <td className="px-4 py-2">{producao.ID_Pneu}</td>
              <td className="px-4 py-2">{producao.modelo}</td>
              <td className="px-4 py-2">{producao.EIAproRepro ? "Sim" : "Não"}</td>
              <td className="px-4 py-2">{producao.EIdata}</td>
              <td className="px-4 py-2">{producao.RasAproRepro ? "Sim" : "Não"}</td>
              <td className="px-4 py-2">{producao.Rasdata}</td>
              <td className="px-4 py-2">{producao.EscAproReproConserto ? "Sim" : "Não"}</td>
              <td className="px-4 py-2">{producao.ACAproRepro ? "Sim" : "Não"}</td>
              <td className="px-4 py-2">{producao.OrbAproRepro ? "Sim" : "Não"}</td>
              <td className="px-4 py-2">{producao.CBAproRepro ? "Sim" : "Não"}</td>
              <td className="px-4 py-2">{producao.ABApro ? "Sim" : "Não"}</td>
              <td className="px-4 py-2">{producao.MonAproRepro ? "Sim" : "Não"}</td>
              <td className="px-4 py-2">{producao.AutAutoclave}</td>
              <td className="px-4 py-2">{producao.EFData}</td>
              <td className="px-4 py-2">{producao.EFConclusao ? "Concluído" : "Em Processo"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaProducao;