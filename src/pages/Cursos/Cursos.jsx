import React, { useState, useEffect } from "react";
import Tabla from "../../components/Tabla/Tabla";
import { headCells } from "./Data";
import { obtenerCursos } from "../../services/Cursos";
import { NavBar } from "../../components";

const Cursos = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    obtenerCursos().then((res) => setCursos(res));
  }, []);

  return (
    <>
      <NavBar />
      <Tabla headCells={headCells} rows={cursos} titulo="Cursos" />
    </>
  );
};

export default Cursos;
