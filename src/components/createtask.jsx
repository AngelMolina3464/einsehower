import { useState } from "react";
import Swal from "sweetalert2";
import { CreateDocument } from "../data/commands.js";

export const CreateTask = () => {
  const [dataPacking, setDataPacking] = useState({
    titulo: "",
    detalles: "",
    urgencia: "no",
    importancia: "no",
  });

  const HandleClick_SendPacking = () => {
    annuncedWindow();
  };

  const HandleChange__titulo = (event) => {
    setDataPacking({ ...dataPacking, titulo: event.target.value });
  };

  const HandleChange__descripcion = (event) => {
    setDataPacking({ ...dataPacking, detalles: event.target.value });
  };

  const HandleChange__urgencia = (event) => {
    setDataPacking({ ...dataPacking, urgencia: event.target.value });
  };

  const HandleChange__importancia = (event) => {
    setDataPacking({ ...dataPacking, importancia: event.target.value });
  };

  const annuncedWindow = () => {
    Swal.fire({
      title: "Crear Tarea?",
      text: "Al confirmar, la misma sera Integrada a la Lista de Tareas",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Crearla!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Send Action Packing
        CreateDocument("tareas", dataPacking)
        Swal.fire({
          title: "Creada!",
          text: "Tu tarea fue Creada, recuerda Actualizar el Tablero.",
          icon: "success",
        });
      }
    });
  };
  return (
    <>
      <form className="formContainer">
        <label>Titulo: </label>
        <input
          type="text"
          placeholder="Titulo de la Tarea..."
          onChange={HandleChange__titulo}
        />
        <label>Detalles: </label>
        <textarea
          placeholder="Detalles de la Tarea..."
          onChange={HandleChange__descripcion}
        ></textarea>
        <label htmlFor="">Es Urgente ? </label>
        <select onClick={HandleChange__urgencia} defaultValue="no">
          <option value="si">Si</option>
          <option value="no">No</option>
        </select>
        <label htmlFor="">Es Importante ? </label>
        <select onClick={HandleChange__importancia} defaultValue="no">
          <option value="si">Si</option>
          <option value="no">No</option>
        </select>
      </form>
      <div className="buttonerContainer">
        <button
          onClick={HandleClick_SendPacking}
          className="clasical__button sendAction"
        >
          Enviar Tarea
        </button>
      </div>
    </>
  );
};
