import React, { useState } from "react";
import Sidebar from "../componentes/sidebar/lateral";

const HomePage = ({ token }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1" style={{ transform: `translateX(${isOpen ? '80px' : '0'})`, transition: 'transform 0.3s' }}>
        <h1 className="mt-10 ml-10 text-3xl font-bold text-gray-800">Bem-vindo(a) ao Sistema da Renovatec</h1>
      </div>
    </div>
  );
};

export default HomePage;
