// import React from "react";
import '../../styleSheets/boton.css'
type BotonProps = {
  texto: string;
  esBotonDeClic: boolean;
  manejarClic: () => void;
};
function Boton ({texto,esBotonDeClic, manejarClic}:BotonProps){
    return (
        <button className={esBotonDeClic? 'boton-clic':'boton-reiniciar'}
        onClick={manejarClic} >
            {texto}
        </button>
    );
}
export default Boton;