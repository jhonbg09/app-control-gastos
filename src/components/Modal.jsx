/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import CerrarBtn from "../img/cerrar.svg";
import Mensaje from "./Mensaje";
import { useState, useEffect } from "react";

const Modal = ({
  setModal,
  animarModal,
  setAnimarModal,
  guardarGasto,
  gastoEditar,
  setGastoEditar
}) => {
  const [mensaje, setMensaje] = useState("");
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [categoria, setCategoria] = useState("");
  const [fecha, setFecha] = useState("");
  const [id, setId] = useState("");
  useEffect(() => {
    if(Object.keys(gastoEditar).length > 0){
      setNombre(gastoEditar.nombre)
      setCantidad(gastoEditar.cantidad)
      setCategoria(gastoEditar.categoria)
      setId(gastoEditar.id)
      setFecha(gastoEditar.fecha)
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([nombre, cantidad, categoria].includes("")) {
      setMensaje("todos los campos son obligatorios");
      setTimeout(() => {
        setMensaje("");
      }, 2000);
      return;
    }
    guardarGasto({ nombre, cantidad, categoria, id, fecha});
  };

  const ocultarModal = () => {
    setAnimarModal(false);
    setGastoEditar({})
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="boto cerrar" onClick={ocultarModal} />
      </div>
      <form
        onSubmit={handleSubmit}
        className={`formulario ${animarModal ? "animar" : "cerrar"}`}
      >
        <legend>{gastoEditar.nombre ? "Editar Gasto" : "Nuevo Gasto"}</legend>
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Añade el Nombre del Gasto"
          />
        </div>

        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            type="number"
            id="cantidad"
            name="cantidad"
            placeholder="Añade la Cantidad del Gasto ej: 100"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
          />
        </div>
        <div className="campo">
          <label htmlFor="categoria">Cantegoria</label>
          <select
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">-- Seleccione --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>
        <input type="submit" value={gastoEditar.nombre ? "Guardar Cambios" : "Añadir Gasto"} />
      </form>
    </div>
  );
};

export default Modal;
