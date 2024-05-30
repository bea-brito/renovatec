import React, { useEffect } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      // Opcional: Desabilitar rolagem no fundo
      document.body.style.overflow = 'hidden';
    } else {
      // Restaura a rolagem
      document.body.style.overflow = '';
    }

    // Limpeza ao desmontar componente
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]); // Dependências do efeito

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg relative">
        {children}
        <button onClick={onClose} className="absolute top-2 right-2 text-black">✖</button>
        <img src={require('../assets/qrcode.jpg')} alt="QrCode" />
      </div>
    </div>
  );
};

export default Modal;
