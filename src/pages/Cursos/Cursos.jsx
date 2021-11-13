import React, { useState, useEffect } from "react";
import Tabla from "../../components/Tabla/Tabla";
import { headCells } from "./Data";
import { obtenerCursos } from "../../services/Cursos";
import CircleProgressBar from "../../components/Feedback/CircleProgressBar";
import { NavBar } from "../../components";

const Cursos = () => {
  const [cursos, setCursos] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    obtenerCursos().then((res) => {
      setCursos(res);
      setSuccess((success) => !success);
    });
  }, []);

  return (
    <>
      <NavBar />
      <CircleProgressBar success={success} />
      <Tabla
        headCells={headCells}
        rows={cursos}
        titulo="Cursos"
        baseRedirect="/cursos/"
        idParam="id"
      />
    </>
  );
};

export default Cursos;
