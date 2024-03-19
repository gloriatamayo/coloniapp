import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
   <h1 className="title">
      ColoniApp <br></br>Residencial Los Robles
   </h1>
   <h2 className="inicio">
    <br></br>¡Bienvenido!
    </h2>
    <input type="email" className="new-task" placeholder='E-mail'/>
    <br></br>
    <input type="password" className="new-task" placeholder='Contraseña'/>
    <p><a href='#'>¿Olvidaste tu contraseña?</a></p>
    <br></br>
    <button name='button' className='button'>Enviar</button>
</div>
  );
}

export default App;
