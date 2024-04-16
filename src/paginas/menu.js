import Botao from "../componentes/botao/botao";
import { Link } from "react-router-dom";

const Menu = ({ token }) => {
  return (
    <div className="w-full h-screen flex items-start">
      <div className="w-full flex flex-col p-20">
        <h3 className="text-2xl font-semibold mb-4 text-yellow-500">
          Seja Bem Vindo, {token.user.user_metadata.nome}!
        </h3>

        <div className="w-full flex items-center justify-center">
          <Link
            to="/"
            className="text-sm cursor-pointer whitespace-nowrap font-medium underline underline-offset-2 hover:text-yellow-500"
          >
            <Botao className="w-full mt-2 bg-black text-white py-2 px-4 rounded hover:bg-yellow-500">
              {" "}
              Voltar{" "}
            </Botao>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
