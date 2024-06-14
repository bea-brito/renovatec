import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../context/AuthProvider";
import { getVendedorByID } from "../../services/vendedorCRUD";
import { Link } from "react-router-dom";

const Cabecalho = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const { user, signOut } = useAuth();
  const [usuario, setUsuario] = useState({
    nome: "",
  });

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { error } = await signOut();
      console.log(error);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await getVendedorByID(user.id);
        if (error) {
          console.log("Error:");
          console.log(error);
          throw error;
        }
        const dadosUsuario = {
          nome: data[0].nome,
        };

        setUsuario(dadosUsuario);
        console.log(data);
        return data;
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [user.id]);

  const profileIcon = (
    <div className="flex items-center">
      <div className="text-white mr-2">Bem-vindo, {usuario.nome}</div>
      <button onClick={toggleProfileMenu} className="focus:outline-none">
        <FontAwesomeIcon
          icon={faUser}
          className="text-white w-8 h-8 rounded-full"
        />
      </button>
    </div>
  );
  return (
    <div>
      <div className="flex items-center justify-end bg-gray-400 p-4">
        <div>{profileIcon}</div>
      </div>
      {showProfileMenu && (
        <div className="absolute top-12 right-4 bg-white border border-gray-300 rounded shadow-md">
          <ul>
            <Link
              to="/perfilUsuario"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Editar Perfil
            </Link>
            <li>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Sair
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Cabecalho;
