// import React from "react";
import '../../styleSheets/contador.css'
type ContadorType = {
    contadorNumero:number
}

function Contador ({contadorNumero}:ContadorType){
    return(
        <div className="contador-contenido">
            <p>{contadorNumero}</p>
        </div>
    );
}
export default Contador;