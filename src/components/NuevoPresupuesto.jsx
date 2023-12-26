import { useState } from "react";
import Mensaje from "./Mensaje";
// eslint-disable-next-line react/prop-types
const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsValidPresupuesto}) => {
    const [mensaje, setMensaje] = useState('');
    // Validador para el input
    const handlePresupuesto = e => {
        e.preventDefault();

        if(!presupuesto || presupuesto  < 0){
            setMensaje('No es un presupuesto valido');
            return
        } 
        // borrando la alerta
        setMensaje('')
        
        setIsValidPresupuesto(true)
        
    }
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario" onSubmit={handlePresupuesto}>
        <div className="campo">
            <label>Defnir Presupuesto</label>
            <input
                className="nuevo-presupuesto"
                type="number"
                placeholder="Añade tu Presupuesto"
                value={presupuesto}
                onChange={ e => setPresupuesto(Number(e.target.value))}
            />
        </div>
        <input
            type="submit"
            value="Añadir"
        />
        {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
      </form>
    </div>
  )
}

export default NuevoPresupuesto
