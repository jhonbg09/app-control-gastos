/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Gasto from "./Gasto.jsx"
// eslint-disable-next-line no-unused-vars
const ListadoGastos = ({gastos, setGastoEditar}) => {
  return (
    <div className="Listado-gastos contenedor">
      <h2>{gastos.length ? 'Gastos' : 'No Hay gastos aun'}</h2>
      {gastos.map(gasto => (
        <Gasto
          key={gasto.id}
          gasto={gasto}
          setGastoEditar={setGastoEditar}
        />
      ))}
    </div>
  )
}

export default ListadoGastos
