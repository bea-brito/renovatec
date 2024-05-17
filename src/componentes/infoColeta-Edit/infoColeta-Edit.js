import React, { useState, useEffect } from 'react';

const InfoColeta = ({ pneus, adicionarPneu, infoGeral, setInfoGeral  }) => {
    const [novoPneu, setNovoPneu] = useState({
        quantidade: '',
        matricula: '',
        marca: '',
        modelo: '',
        tamanho: '',
        dot: '',
        servico: ''
    });

    useEffect(() => {
        if (!infoGeral.idColeta) {  // Verifica se o ID da coleta já foi gerado
            setInfoGeral(prev => ({
                ...prev,
                idColeta: `COLETA-${Math.floor(Math.random() * 1000000)}`
            }));
        }
    }, [setInfoGeral, infoGeral.idColeta]);

    const handleChangePneu = (e) => {
        const { name, value } = e.target;
        setNovoPneu(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleChangeGeral = (e) => {
        const { name, value } = e.target;
        setInfoGeral(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAddPneu = () => {
        if (Object.values(novoPneu).some(value => value === '')) {
            alert('Por favor, preencha todos os campos antes de adicionar.');
            return;
        }
        adicionarPneu(novoPneu);
        setNovoPneu({
            quantidade: '',
            matricula: '',
            marca: '',
            modelo: '',
            tamanho: '',
            dot: '',
            servico: ''
        }); 
    };

    return (
        <div className="flex-1 transition-margin duration-300 p-4">
            <h2 className="text-lg font-bold mb-4">Informações da Coleta</h2>
            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                    type="text"
                    name="idColeta"
                    placeholder="ID da Coleta"
                    value={infoGeral.idColeta}
                    readOnly
                    className="w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100 cursor-not-allowed"
                />
                <input
                    type="text"
                    name="cliente"
                    placeholder="Nome do Cliente"
                    value={infoGeral.cliente}
                    onChange={handleChangeGeral}
                    className="w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="date"
                    name="dataPedido"
                    placeholder="Data do Pedido"
                    value={infoGeral.dataPedido}
                    onChange={handleChangeGeral}
                    className="w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="vendedor"
                    placeholder="Nome do Vendedor"
                    value={infoGeral.vendedor}
                    onChange={handleChangeGeral}
                    className="w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="tel"
                    name="telefone"
                    placeholder="Telefone para Contato"
                    value={infoGeral.telefone}
                    onChange={handleChangeGeral}
                    className="w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <hr />
            <h3 className="text-lg font-bold mb-4">Informações dos Pneus</h3>
            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                    type="number"
                    name="quantidade"
                    placeholder="Quantidade"
                    value={novoPneu.quantidade}
                    onChange={handleChangePneu}
                    className="w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="matricula"
                    placeholder="Matrícula"
                    value={novoPneu.matricula}
                    onChange={handleChangePneu}
                    className="w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select
                    name="marca"
                    value={novoPneu.marca}
                    onChange={handleChangePneu}
                    className="w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Selecione a marca</option>
                    <option value="Marca1">Marca1</option>
                    <option value="Marca2">Marca2</option>
                </select>
                <select
                    name="modelo"
                    value={novoPneu.modelo}
                    onChange={handleChangePneu}
                    className="w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Selecione o modelo</option>
                    <option value="Modelo1">Modelo1</option>
                    <option value="Modelo2">Modelo2</option>
                </select>
                <input
                    type="text"
                    name="tamanho"
                    placeholder="Tamanho"
                    value={novoPneu.tamanho}
                    onChange={handleChangePneu}
                    className="w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="dot"
                    placeholder="DOT"
                    value={novoPneu.dot}
                    onChange={handleChangePneu}
                    className="w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select
                    name="servico"
                    value={novoPneu.servico}
                    onChange={handleChangePneu}
                    className="w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Selecione o serviço</option>
                    <option value="Recapagem">Recapagem</option>
                    <option value="Manutenção">Manutenção</option>
                </select>
            </div>
            {pneus.length > 0 && (
                <table className="min-w-full table-auto text-sm text-left text-gray-500 dark:text-gray-400 shadow-xl">
                    <thead className="text-xs text-white uppercase bg-black dark:bg-blue-700">
                        <tr>
                            <th className="px-6 py-3">Quantidade</th>
                            <th className="px-6 py-3">Matrícula</th>
                            <th className="px-6 py-3">Marca</th>
                            <th className="px-6 py-3">Modelo</th>
                            <th className="px-6 py-3">Tamanho</th>
                            <th className="px-6 py-3">DOT</th>
                            <th className="px-6 py-3">Serviço</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pneus.map((pneu, index) => (
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                                <td className="px-6 py-4">{pneu.quantidade}</td>
                                <td className="px-6 py-4">{pneu.matricula}</td>
                                <td className="px-6 py-4">{pneu.marca}</td>
                                <td className="px-6 py-4">{pneu.modelo}</td>
                                <td className="px-6 py-4">{pneu.tamanho}</td>
                                <td className="px-6 py-4">{pneu.dot}</td>
                                <td className="px-6 py-4">{pneu.servico}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default InfoColeta;
