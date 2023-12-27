/* eslint-disable react/prop-types */
import CerrarBtn from '../img/cerrar.svg'
const Modal = ({setModal, animarModal, setAnimarModal}) => {
    const ocultarModal =() => {
        
        setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500);
    }

  return (
    <div className="modal">
      <p>Desde Modal</p>
      <div className="cerrar-modal">
        <img
            src={CerrarBtn}
            alt='boto cerrar'
            onClick={ocultarModal}
        />
      </div>
      <form className={`formulario ${animarModal ? 'animar': 'cerrar'}`}>
        <legend>Nuevo Gasto</legend>
        <div className='campo'>
            <label htmlFor='nombre'>Nombre Gasto</label>
            <input type='text' id='nombre' name='nombre' placeholder='Añade el Nombre del Gasto'/>
        </div>
        <div className='campo'>
            <label htmlFor='cantidad'>Cantidad</label>
            <input type='number' id='cantidad' name='cantidad' placeholder='Añade la Cantidad del Gasto ej: 100'/>
        </div>
        <div className='campo'>
            <label htmlFor='categoria'>Cantegoria</label>
            <select id='categoria'>
                <option value=''>-- Seleccione --</option>
                <option value='ahorro'>Ahorro</option>
                <option value='comida'>Comida</option>
                <option value='casa'>Casa</option>
                <option value='gastos'>Gastos Varios</option>
                <option value='ocio'>Ocio</option>
                <option value='salud'>Salud</option>
                <option value='suscripciones'>Suscripciones</option>
            </select>
        </div>
        <input type='submit' value='Añadir Gasto'/>
      </form>
    </div>
  )
}

export default Modal
