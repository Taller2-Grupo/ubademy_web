import React, { useState, useEffect } from "react";
import Tabla from "../../components/Tabla/Tabla";
import { headCells, endPointCursos } from "./Data";

const Cursos = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    fetch(endPointCursos, {
      "Access-Control-Allow-Origin": "*",
    })
      .then((response) => response.json())
      .then((json) => {
        setCursos(json);
      });
  }, []);

  return (
    <>
      <Tabla headCells={headCells} rows={cursos} titulo="Cursos" />
    </>
  );
};

export default Cursos;
