import React, { useState, useEffect } from "react";
import Tabla from "../../components/Tabla/Tabla";
import { headCells } from "./Data";
import { NavBar } from "../../components";
import CircleProgressBar from "../../components/Feedback/CircleProgressBar";
import { obtenerUsuarios } from "../../services/Usuarios";

const Usuarios = () => {
  const [users, setUsers] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    obtenerUsuarios().then(({ data }) => {
      setUsers(data);
      setSuccess((success) => !success);
    });
  }, []);

  return (
    <>
      <NavBar />
      <CircleProgressBar success={success} />
      <Tabla
        headCells={headCells}
        rows={users}
        titulo="Usuarios"
        baseRedirect="/usuarios/"
      />
    </>
  );
};

export default Usuarios;
