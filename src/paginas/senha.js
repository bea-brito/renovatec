import Botao from "../componentes/botao/botao";
import imagem from "../componentes/imagens/imagemprincipal1.jpg";
import { Link } from "react-router-dom";

const Senha = () => {
  return (
    <div className="w-full flex flex-col p-20">
      <div className="flex">
        {" "}
        <Link to="/">
          <img className="w-12 h-12" src={imagem} alt="descriçao" />
          <p className="flex">Voltar</p>
        </Link>
      </div>
      <h3 className="text-2xl font-semibold mb-4 text-yellow-500">
        Redefinir a senha
      </h3>
      <p>Escolha uma nova senha de 8 caracteres</p>
      <form className="w-full flex flex-col">
        <input
          type="password"
          placeholder="Informe uma nova senha"
          className="w-full text-black py-4 my-2  border-b border-black outline-none focus:outline-none"
        />
        <input
          type="password"
          placeholder="Confirme a nova senha"
          className="w-full text-black py-4 my-2  border-b border-black outline-none focus:outline-none"
        />
      </form>
      <div className="flex">
        <div className="flex w-full">
          <Botao className="mt-2 w-1/4 bg-black hover:bg-yellow-500 text-white p-4 rounded text-center">
            Redefinir
          </Botao>
        </div>
      </div>
    </div>
  );
};

export default Senha;
