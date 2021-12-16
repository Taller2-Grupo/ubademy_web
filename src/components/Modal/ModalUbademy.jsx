import React, { useState } from "react";
import {
  Modal,
  Button,
  Box,
  Typography,
  FormControl,
  InputLabel,
  FilledInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { crearUsuario } from "../../services/Usuarios";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useHistory } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "#ced3da",
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
};

const ModalUbademy = ({ open, handleClose, setAlert }) => {
  const history = useHistory();
  const [admin, setAdmin] = useState({
    email: "",
    password: "",
    nombre: "",
    apellido: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setAdmin({ ...admin, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setAdmin({
      ...admin,
      showPassword: !admin.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const crearAdmin = (body) => {
    let res = crearUsuario(body);
    res.then((resp) => {
      setAlert({
        show: true,
        text: resp.ok ? resp.data : resp.data,
        ok: resp.ok,
      });
      history.push("/usuarios/");
    });

    handleClose();
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
      >
        <Box sx={style}>
          <FormControl fullWidth sx={{ m: 1 }} align="center">
            <Typography
              id="modal-modal-title"
              variant="h5"
              component="h2"
              color="#101522"
            >
              Nuevo Administrador
            </Typography>
          </FormControl>
          <FormControl fullWidth sx={{ m: 1 }} variant="filled">
            <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
            <FilledInput
              id="outlined-adornment-email"
              value={admin.email}
              label="Email"
              type="email"
              onChange={handleChange("email")}
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 1 }} variant="filled">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <FilledInput
              id="outlined-adornment-password"
              type={admin.showPassword ? "text" : "password"}
              value={admin.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {admin.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 1 }} variant="filled">
            <InputLabel htmlFor="outlined-adornment-nombre">Nombre</InputLabel>
            <FilledInput
              id="outlined-adornment-nombre"
              value={admin.nombre}
              label="Nombre"
              type="text"
              onChange={handleChange("nombre")}
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 1 }} variant="filled">
            <InputLabel htmlFor="outlined-adornment-apellido">
              Apellido
            </InputLabel>
            <FilledInput
              id="outlined-adornment-apellido"
              value={admin.apellido}
              label="Apellido"
              type="text"
              onChange={handleChange("apellido")}
            />
          </FormControl>

          <div align="right">
            <Button
              variant="contained"
              color="success"
              onClick={() => crearAdmin(admin)}
              sx={{ m: 1 }}
            >
              Agregar
            </Button>

            <Button
              variant="contained"
              color="error"
              onClick={handleClose}
              sx={{ m: 1 }}
            >
              Cancelar
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default ModalUbademy;
