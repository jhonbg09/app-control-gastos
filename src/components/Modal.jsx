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
      </form>
    </div>
  )
}

export default Modal
