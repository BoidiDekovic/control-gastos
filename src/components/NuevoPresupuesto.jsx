import { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsValiedadPresupuesto}) => {
 
  const [mensaje,setMensaje] = useState("")

  const handlePresupuesto = (e) => {
    e.preventDefault();

    if(!presupuesto || presupuesto < 0){
        setMensaje("No es un presupuesto valido")
        return

    }
    setMensaje("")
    setIsValiedadPresupuesto(true)

  }
 
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      
    <form onSubmit={handlePresupuesto} className="formulario">
        <div className="campo">
          <label>Definir Presupuesto</label> 
          <input
            className="nuevo-presupuesto"
            type="number"
            placeholder='Agrega tu presupuesto'
            value={presupuesto}
            onChange={ e => setPresupuesto(Number(e.target.value))}
          
          />
        </div>


        <input type='submit' value="Agregar" />

        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>  }
    </form>

    </div>
  )
}

export default NuevoPresupuesto
