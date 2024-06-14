import React, { useState } from "react";
import SidebarItem from "./SidebarItem";
import { Link } from "react-router-dom";
import Botao from "../botao/botao";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faTruck,
  faHouse,
  faArrowRight,
  faArrowLeft,
  faTractor,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../context/AuthProvider";

const Sidebar = () => {
  const { signOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
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

  return (
    <div className="flex">
      <div
        className={`bg-black fixed top-0 left-0 z-50 ${
          isOpen ? "w-60" : "w-20"
        } h-full transition-width duration-300`}
      >
        <div className="px-4 py-4 flex items-center justify-between mb-4">
          <div className="flex items-center">
            <span role="img" aria-label="logo"></span>
          </div>
          <button onClick={toggleSidebar} className="text-white">
            {isOpen ? (
              <div className="relative w-8 h-8 ">
                <div className="absolute flex items-center justify-center w-full h-full -ml-2 bg-gray-500 rounded-lg">
                  <SidebarItem
                    icon={<FontAwesomeIcon icon={faArrowLeft} size="lg" />}
                    isOpen={isOpen}
                  />
                </div>
              </div>
            ) : (
              <div className="relative w-9 h-9 ">
                <div className="absolute flex items-center justify-center w-full h-full bg-gray-500 rounded-lg">
                  <SidebarItem
                    icon={<FontAwesomeIcon icon={faArrowRight} size="lg" />}
                    isOpen={isOpen}
                  />
                </div>
              </div>
            )}
          </button>
        </div>
        <Link to="/homepage">
          <SidebarItem
            icon={<FontAwesomeIcon icon={faHouse} size="lg" />}
            itemName="Home"
            isOpen={isOpen}
          />
        </Link>

        <Link to="/HistoricoDeColeta">
          <SidebarItem
            icon={<FontAwesomeIcon icon={faTruck} size="lg" />}
            itemName="Coleta"
            isOpen={isOpen}
          />
          {/* <SidebarItem icon={<FontAwesomeIcon icon={faTractor} size="lg" />} itemName="Produção" isOpen={isOpen} /> */}
        </Link>

        <SidebarItem
          icon={<FontAwesomeIcon icon={faGear} size="lg" />}
          itemName="Faturamento"
          isOpen={isOpen}
        />
        <SidebarItem
          icon={<FontAwesomeIcon icon={faGear} size="lg" />}
          itemName="Cliente"
          isOpen={isOpen}
        />
        <div className="absolute bottom-0 left-0 w-full">
          <Botao
            onClick={handleLogout}
            className="w-full mt-2 bg-black text-white py-2 px-4 bg-yellow-500 hover:bg-yellow-600"
          >
            Logout
          </Botao>
        </div>
      </div>
      <div className={`flex-1 ml-${isOpen ? "60" : "10"}`}>
        {/* Conteúdo aqui */}
      </div>
    </div>
  );
};

export default Sidebar;
