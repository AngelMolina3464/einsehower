import "../styles/gridTable.css";
import { CardTask } from "./cardTask.jsx";
import { GetDocuments } from "../data/commands.js";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2'

const dataBackend = await GetDocuments("tareas");

export const GridTable = () => {
  const [dataPackingLoad, setDataPackingLoad] = useState(dataBackend);

  const dataHacer = dataPackingLoad.filter(
    (element) => element.urgencia === "si" && element.importancia === "si"
  );

  const dataDecide = dataPackingLoad.filter(
    (element) => element.urgencia === "no" && element.importancia === "si"
  );

  const dataDelega = dataPackingLoad.filter(
    (element) => element.urgencia === "si" && element.importancia === "no"
  );

  const dataElimina = dataPackingLoad.filter(
    (element) => element.urgencia === "no" && element.importancia === "no"
  );

  const HandClick__Reload = async () => {
    setDataPackingLoad(await GetDocuments("tareas"));
    annuncedAfirmative();
  };

  const annuncedAfirmative = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Los componentes Fueron actualizados",
      showConfirmButton: false,
      timer: 1500,
      toast: true,
    });
  };

  useEffect(() => {
    return async () => {
      setDataPackingLoad(await GetDocuments("tareas"));
    };
  }, [dataPackingLoad]);

  return (
    <>
      <section className="gridTableContainer">
        <strong className=" horizontal1-2 celdaVertical headerCell">
          Importante
        </strong>
        <strong className="celdaHorizontal headerCell">Urgente</strong>
        <strong className="celdaHorizontal headerCell">No Urgente</strong>
        <div className="celda blueCelda">
          <div>
            <strong className="titleTaskClass">Hacer</strong>
            <CardTask dataFiltered={dataHacer} />
          </div>
        </div>
        <div className="celda yellowCelda">
          <div>
            <strong className="titleTaskClass">Planificar</strong>
            <CardTask dataFiltered={dataDecide} />
          </div>
        </div>
        <strong className=" horizontal1-3 celdaVertical headerCell">
          No Importante
        </strong>
        <div className="celda greenCelda">
          <div>
            <strong className="titleTaskClass">Delegar</strong>
            <CardTask dataFiltered={dataDelega} />
          </div>
        </div>
        <div className="celda redCelda">
          <div>
            <strong className="titleTaskClass">Eliminar</strong>
            <CardTask dataFiltered={dataElimina} />
          </div>
        </div>
      </section>
      <div className="buttoner__Control">
        <button
          className="buttonStandar blueButtonColor"
          onClick={HandClick__Reload}
        >
          Actualizar
        </button>
      </div>
    </>
  );
};
