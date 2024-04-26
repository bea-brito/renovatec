import React, { useState } from 'react';
import SidebarItem from './SidebarItem';
import Botao from '../botao/botao';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importa FontAwesomeIcon
import { faGear, faTruck, faHouse, faArrowRight, faArrowLeft, faTractor } from '@fortawesome/free-solid-svg-icons'; // Importa o ícone 

const Sidebar = ({ token }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <div className={`bg-black fixed top-0 left-0 z-50 ${isOpen ? 'w-60' : 'w-20'} h-full transition-width duration-300`}>
        <div className="px-4 py-4 flex items-center justify-between mb-4">
          <div className="flex items-center">
            <span role="img" aria-label="logo"></span>
          </div>
          <button onClick={toggleSidebar} className="text-white focus:outline-none">
            {isOpen ? (
              <div className="relative w-8 h-8 ">
                <div className="absolute flex items-center justify-center w-full h-full -ml-4 bg-gray-500"> {/* Alterado para bg-gray-500 */}
                  <SidebarItem icon={<FontAwesomeIcon icon={faArrowLeft} size="lg" />} />
                </div>
              </div>
            ) : (
              <div className="relative w-8 h-8 ">
                <div className="absolute flex items-center justify-center w-full h-full bg-gray-500"> {/* Alterado para bg-gray-500 */}
                  <SidebarItem icon={<FontAwesomeIcon icon={faArrowRight} size="lg" />} />
                </div>
              </div>
            )}
          </button>
        </div>
        <div className="mb-10 ml-1 hover:bg-gray-700">
          <div className="text-white ml-2 flex items-center">
            <SidebarItem icon={<FontAwesomeIcon icon={faHouse} size="lg" />} /> 
            <span className="ml-4">Home</span> 
          </div>
        </div>
        <div className="mb-10 ml-1 hover:bg-gray-700">
          <div className="text-white ml-2 flex items-center"> 
            <SidebarItem icon={<FontAwesomeIcon icon={faTruck} size="lg" />} /> 
            <span className="ml-4">Coleta</span> 
          </div>
        </div>
        <div className="mb-10 ml-1 hover:bg-gray-700">
          <div className="text-white ml-2 flex items-center">
            <SidebarItem icon={<FontAwesomeIcon icon={faTractor} size="lg" />} /> 
            <span className="ml-4">Produção</span> 
          </div>
        </div>
        <div className="mb-10 ml-1 hover:bg-gray-700">
          <div className="text-white ml-2 flex items-center">
            <SidebarItem icon={<FontAwesomeIcon icon={faGear} size="lg" />} /> 
            <span className="ml-4">Faturamento</span> 
          </div>
        </div>
        <div className="mb-10 ml-1 hover:bg-gray-700">
          <div className="text-white ml-2 flex items-center">
            <SidebarItem icon={<FontAwesomeIcon icon={faGear} size="lg" />} /> 
            <span className="ml-4">Cliente</span> 
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full">
          <Botao className="w-full mt-2 bg-black text-white py-2 px-4 bg-yellow-500 hover:bg-yellow-600">
            Logout
          </Botao>
        </div>
      </div>
      <div className={`flex-1 ml-${isOpen ? '60' : '10'}`}> {/* Adiciona margem à esquerda quando a barra lateral estiver aberta */}
        {/* Conteúdo aqui */}
      </div>
    </div>
  );
};

export default Sidebar;
