import React, { useState } from "react";
import Sidebar from "../componentes/sidebar/lateral";
import Cards from "../componentes/cards/cards";
import Cabecalho from "../componentes/cabecalho/Cabecalho";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Cabecalho />
      <div className="flex flex-grow">
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <div
          className={`ml-${
            isOpen ? "60" : "10"
          } flex-1 flex justify-center px-4`}
        >
          <div className={`w-full max-w-screen-md`}>
            <Cards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
