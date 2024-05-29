import React, { useEffect } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      // Adiciona desfoque ao fundo
      document.body.style.filter = 'blur(5px)';
      // Opcional: Desabilitar rolagem no fundo
      document.body.style.overflow = 'hidden';
    } else {
      // Remove desfoque e restaura a rolagem
      document.body.style.filter = '';
      document.body.style.overflow = '';
    }

    // Limpeza ao desmontar componente
    return () => {
      document.body.style.filter = '';
      document.body.style.overflow = '';
    };
  }, [isOpen]); // Dependências do efeito

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-10 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        {children}
        <button onClick={onClose} className="absolute top-2 right-2 text-black">✖</button>
      </div>
    </div>
  );
};

export default Modal;
