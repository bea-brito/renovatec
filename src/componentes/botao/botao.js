
import React from 'react';

const Botao = ({ className, children }) => {
  return (
    <button className={`focus:outline-none ${className}`}>
      {children}
    </button>
  );
};

export default Botao;
