import NuevoPresupuesto from "./NuevoPresupuesto"

// eslint-disable-next-line react/prop-types
const Header = ({presupuesto, setPresupuesto}) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>
      <NuevoPresupuesto
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
      />
    </header>
  )
}

export default Header
