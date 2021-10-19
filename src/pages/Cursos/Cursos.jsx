import React, { useState, useEffect } from "react";
import Tabla from "../../components/Tabla/Tabla";
import { headCells } from "./Data";
import { obtenerCursos } from "../../services/Cursos";

const Cursos = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    obtenerCursos().then((res) => setCursos(res));
  }, []);

  return (
    <>
      <Tabla headCells={headCells} rows={cursos} titulo="Cursos" />
    </>
  );
};

export default Cursos;
