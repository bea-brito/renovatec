import Botao from "../componentes/botao/botao";
import { Link } from "react-router-dom";

const Menu = ({ token }) => {
  //O codigo comentado esta redundante, pois a pagina ja tem funcao de logout. Manterei o código para caso de erro futuro
  // let navigate = useNavigate();

  function handleLogout() {
    sessionStorage.removeItem("token");
    // navigate("/");
  }

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
            <Botao
              onClick={handleLogout}
              className="w-full mt-2 bg-black text-white py-2 px-4 rounded hover:bg-yellow-500"
            >
              {" "}
              Sair da sessão{" "}
            </Botao>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
