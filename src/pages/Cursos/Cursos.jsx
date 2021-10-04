import React, { useState, useEffect } from "react";
import Tabla from "../../components/Tabla/Tabla";
import { headCells } from "./Data";

const Cursos = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setCursos(json));
  }, [cursos]);

  return (
    <>
      <Tabla headCells={headCells} rows={cursos} titulo="Cursos" />
    </>
  );
};

export default Cursos;
