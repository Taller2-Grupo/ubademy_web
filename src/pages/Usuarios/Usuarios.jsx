import React, { useState, useEffect } from "react";
import Tabla from "../../components/Tabla/Tabla";
import { headCells } from "./Data";
import { NavBar } from "../../components";
import CircleProgressBar from "../../components/Feedback/CircleProgressBar";
import { obtenerUsuarios } from "../../services/Usuarios";
import ModalUbademy from "../../components/Modal/ModalUbademy";
import { Button, FormControl } from "@mui/material";
import Alerta from "../../components/Feedback/Alerta";

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

  const [alert, setAlert] = useState({
    ok: false,
    show: false,
    text: "",
  });

  return (
    <>
      <NavBar />
      <CircleProgressBar success={success} />

      <FormControl sx={{ m: 1, alignItems: "end", display: "flex" }}>
        <Button
          variant="contained"
          color="success"
          onClick={() => handleOpenModal()}
        >
          Nuevo Administrador
        </Button>
      </FormControl>
      <ModalUbademy
        open={openModal}
        handleClose={handleCloseModal}
        setAlert={setAlert}
      />
      <Tabla
        headCells={headCells}
        rows={users}
        titulo="Usuarios"
        baseRedirect="/usuarios/"
        idParam="username"
      />
      {!alert.show ? (
        ""
      ) : (
        <Alerta text={alert.text} severity={alert.ok ? "success" : "error"} />
      )}
    </>
  );
};

export default Usuarios;
