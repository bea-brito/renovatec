import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from '../componentes/sidebar/lateral';
import InfoColeta from '../componentes/infoColeta-Edit/infoColeta-Edit';

const EditarColeta = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [coletaInfo, setColetaInfo] = useState({
        cliente: '',
        dataPedido: '',
        telefone: '',
        vendedor: '',
        pneus: []
    });
    const [infoGeral, setInfoGeral] = useState({
        idColeta: '',
        cliente: '',
        dataPedido: '',
        telefone: '',
        vendedor: ''
    });

    const navigate = useNavigate();

    const handleSaveColeta = () => {
        const novaColeta = { ...infoGeral, pneus: coletaInfo.pneus };
        console.log('Dados da Coleta:', novaColeta);
        toast.success('Coleta salva com sucesso!');
        navigate('/historicoDeColeta', { state: { novaColeta } });
    };

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex h-screen w-screen w-screen bg-gray-100">
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
            <div className={`flex-1 ${isOpen ? 'ml-60' : 'ml-10'} transition-margin duration-300 p-4`}>
                <h2 className="text-lg font-bold mb-4">Editar Coleta</h2>
                <InfoColeta pneus={coletaInfo.pneus} infoGeral={infoGeral} setInfoGeral={setInfoGeral}  />
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={handleSaveColeta}>Salvar</button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default EditarColeta;
