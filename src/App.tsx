import reactLogo from './assets/react.svg'
import './App.css'
import Boton from './componentes/boton/boton'
import Contador from './componentes/boton/contador'
import { useState } from 'react'

function App() {
  const [contadorNumero,setContadorNumero] = useState(0);

  const manejarClic = () =>{
    setContadorNumero(contadorNumero+1);
  };
  const reiniciarCotador = () =>{
    setContadorNumero(0);
  };
  
  return (
    <>
      <div className='encabezado-contenedor'>
        <div className='logo-contenedor' >
          <img src={reactLogo} className="logo-react" alt="React logo" />
          <h1 className='texto-logo-encabezado'>Front End Developer</h1>
        </div>
      </div>
      <div className='contenedor-princiapal'>
      <div className='contador'>
        <Contador 
        contadorNumero={contadorNumero}/>
      </div>
      <div className='botones'>
        <Boton
        texto='clic'
        esBotonDeClic={true}
        manejarClic={manejarClic}/>
        <Boton
        texto='reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarCotador}/>
      </div>
      </div>
    </>
  )
}

export default App
