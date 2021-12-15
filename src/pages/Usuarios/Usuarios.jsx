import React, { useState, useEffect } from "react";
import Tabla from "../../components/Tabla/Tabla";
import { headCells } from "./Data";
import { NavBar } from "../../components";
import CircleProgressBar from "../../components/Feedback/CircleProgressBar";
import { obtenerUsuarios } from "../../services/Usuarios";
import ModalUbademy from "../../components/Modal/ModalUbademy";
import { Button } from "@mui/material";

const Usuarios = () => {
  const [users, setUsers] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    obtenerUsuarios().then(({ data }) => {
      setUsers(data);
      setSuccess((success) => !success);
    });
  }, []);

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      <NavBar />
      <CircleProgressBar success={success} />
      <br />
      <div align="right">
        <Button
          variant="contained"
          color="success"
          onClick={() => handleOpenModal()}
        >
          Nuevo Administrador
        </Button>
      </div>
      <ModalUbademy open={openModal} handleClose={handleCloseModal} />
      <Tabla
        headCells={headCells}
        rows={users}
        titulo="Usuarios"
        baseRedirect="/usuarios/"
        idParam="username"
      />
    </>
  );
};

export default Usuarios;
