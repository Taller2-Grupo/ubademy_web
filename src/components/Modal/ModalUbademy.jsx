import React from "react";
import { TextField, Modal, Button, Box, Typography } from "@mui/material";
import { crearUsuario } from "../../services/Usuarios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
};

const ModalUbademy = ({ open, handleClose }) => {
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Nuevo Administrador
          </Typography>
          <TextField name="Email" variant="outlined" label="Email" />
          <br />
          <TextField name="Password" variant="outlined" label="Password" />
          <br />
          <TextField name="Nombre" variant="outlined" label="Nombre" />
          <br />
          <TextField name="Apellido" variant="outlined" label="Apellido" />
          <br />
          <br />

          <div align="right">
            <Button
              variant="contained"
              color="success"
              onClick={crearUsuario(/*body*/)}
            >
              Agregar
            </Button>
            <Button variant="contained" color="error" onClick={handleClose}>
              Cancelar
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default ModalUbademy;
