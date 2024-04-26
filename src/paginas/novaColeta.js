import React, { useState } from 'react';
import Sidebar from '../componentes/sidebar/lateral';

const NovaColeta = ({ token }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className={`flex-1 transform transition-transform duration-300 ${isOpen ? 'translate-x-20' : ''}`}>
                <div className="container mx-auto p-4">
                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">Cliente</label>
                                <input
                                    type="text"
                                    placeholder="Informe o nome do cliente"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">Vendedor</label>
                                <input
                                    type="text"
                                    placeholder="Informe o vendedor"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">Data do pedido</label>
                                <input
                                    type="text"
                                    placeholder="00/00/0000"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">Telefone para contato:</label>
                                <input
                                    type="text"
                                    placeholder="Informe o telefone"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                        </div>

                        <div className="mt-6 bg-gray-100 shadow-md rounded px-8 pt-6 pb-8">
                            <h3 className="text-center text-xl font-semibold mb-4">Informações da coleta</h3>
                            <div className="overflow-x-auto">
                                <table className="min-w-full leading-normal">
                                    <thead>
                                        <tr style={{ backgroundColor: '#ead1dc' }}>
                                            <th style={{ padding: '0.5rem', borderBottom: '1px solid #ddd' }}>Pneu</th>
                                            <th style={{ padding: '0.5rem', borderBottom: '1px solid #ddd' }}>Matricula</th>
                                            <th style={{ padding: '0.5rem', borderBottom: '1px solid #ddd' }}>Marca</th>
                                            <th style={{ padding: '0.5rem', borderBottom: '1px solid #ddd' }}>Modelo</th>
                                            <th style={{ padding: '0.5rem', borderBottom: '1px solid #ddd' }}>Tamanho</th>
                                            <th style={{ padding: '0.5rem', borderBottom: '1px solid #ddd' }}>DOT</th>
                                            <th style={{ padding: '0.5rem', borderBottom: '1px solid #ddd' }}>Serviço</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={{ textAlign: 'center', padding: '0.5rem', height: '10px' }}>
                                                <input type="text" />
                                            </td>
                                            <td style={{ textAlign: 'center', padding: '0.5rem' }}>
                                                <input
                                                    type="text"
                                                    placeholder="DDR32" />
                                            </td>
                                            <td style={{ textAlign: 'center', padding: '0.5rem' }}>
                                                <select style={{ padding: '0.25rem', borderRadius: '4px', color: 'gray' }}>
                                                    <option value="bristol">Bristol</option>
                                                    {/* Mais opções aqui */}
                                                </select>
                                            </td>
                                            <td style={{ textAlign: 'center', padding: '0.5rem' }}>
                                                <select style={{ padding: '0.25rem', borderRadius: '4px', color: 'gray' }}>
                                                    <option value="rt22">RT22</option>
                                                    {/* Mais opções aqui */}
                                                </select>
                                            </td>
                                            <td style={{ textAlign: 'center', padding: '0.5rem' }}>
                                                <select style={{ padding: '0.25rem', borderRadius: '4px', color: 'gray' }}>
                                                    <option value="275/80R22.5">275/80R22.5</option>
                                                    {/* Mais opções aqui */}
                                                </select>
                                            </td>
                                            <td style={{ textAlign: 'center', padding: '0.5rem' }}>
                                                <input type="text" placeholder="0123" style={{ padding: '0.25rem', borderRadius: '4px' }} />
                                            </td>
                                            <td style={{ textAlign: 'center', padding: '0.5rem' }}>
                                                <select style={{ padding: '0.25rem', borderRadius: '4px', color: 'gray' }}>
                                                    <option value="">Selecione</option>
                                                    {/* Mais opções aqui */}
                                                </select>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="flex justify-center mt-6">
                                    <button style={{backgroundColor: 'orange'}} className="text-white font-bold py-2 px-4 rounded hover:bg-orange-600 focus:outline-none focus:shadow-outline">
                                        Adicionar pneu
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center mt-6">
                            <button style={{backgroundColor: 'orange'}} className="text-white font-bold py-2 px-10 rounded hover:bg-orange-600 focus:outline-none focus:shadow-outline">
                                Voltar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NovaColeta;