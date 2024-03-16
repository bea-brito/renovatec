import './login.css'
import imagem from '../imagens/imagemprincipal1.jpg'
import Botao from '../botao/botao'
import { Link } from 'react-router-dom';

const Login =() => {
  return  (
    <div className='w-full h-screen flex items-start'>
      
      <div className='relative w-1/2 h-full'>
      <img src={imagem} className='w-full h-full object-cover' alt="Descrição da imagem" />
      </div>

      <div className='w-full flex flex-col p-20'>
        <h3 className='text-2xl font-semibold mb-4 text-yellow-500'>Login</h3>
        <p>Sistema Renovatec</p>
        
        <form className='w-full flex flex-col'>
          <input 
          type="text"
          placeholder='Informe seu usuário'
          className='w-full text-black py-4 my-2  border-b border-black outline-none focus:outline-none' />
          <input type="password" 
          placeholder='Informe sua senha'
          className='w-full text-black py-4 my-2  border-b border-black outline-none focus:outline-none'/>
        </form>

        <div className='w-full flex items-center justify-between'>
          <div className='w-full flex items-center'>
            <input type="checkbox"
            className='w-4 h-4 mr-2'/>
            <p className='text-sm'>Relembrar senha por 30 dias</p>
          </div>
          <p><Link to="/senha" className='text-sm cursor-pointer whitespace-nowrap font-medium underline underline-offset-2 hover:text-yellow-500'>Esqueceu a senha?</Link></p>
        </div>
        <Botao className='w-1/2 mt-2 bg-black text-white py-2 px-4 rounded hover:bg-yellow-500'> Entrar </Botao>
      </div>
    </div>
  )
}
export default Login