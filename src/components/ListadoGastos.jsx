/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Gasto from "./Gasto.jsx"
// eslint-disable-next-line no-unused-vars
const ListadoGastos = ({gastos, setGastoEditar, eliminarGasto}) => {
  return (
    <div className="Listado-gastos contenedor">
      <h2>{gastos.length ? 'Gastos' : 'No Hay gastos aun'}</h2>
      {gastos.map(gasto => (
        <Gasto
          id={gasto.id}
          gasto={gasto}
          setGastoEditar={setGastoEditar}
          eliminarGasto={eliminarGasto}
        />
      ))}
    </div>
  )
}

export default ListadoGastos
