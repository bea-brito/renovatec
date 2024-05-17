import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../componentes/sidebar/lateral";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Cards from '../componentes/cards/cards'; 

const HomePage = ({ token }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  const handleLogout = () => {
    // Implemente a lógica para fazer logout aqui
    console.log("Fazendo logout...");
  };

  const userName = "Usuário Exemplo";
  const profileIcon = (
    <div className="flex items-center">
      <div className="text-white mr-2">Bem-vindo, {userName}</div>
      <button onClick={toggleProfileMenu} className="focus:outline-none">
        <FontAwesomeIcon icon={faUser} className="text-white w-8 h-8 rounded-full" />
      </button>
    </div>
  );

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex items-center justify-end bg-gray-400 p-4">
        <div>{profileIcon}</div>
      </div>
      <div className="flex flex-grow">
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <div className={`ml-${isOpen ? '60' : '10'} flex-1 flex justify-center px-4`}>
          <div className={`w-full max-w-screen-md`}> 
            <Cards />
          </div>
        </div>
      </div>
      {showProfileMenu && (
        <div className="absolute top-12 right-4 bg-white border border-gray-300 rounded shadow-md">
          <ul>
            <li>
              <Link to="/perfil/editar" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Editar
              </Link>
            </li>
            <li>
              <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
                Sair
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HomePage;
