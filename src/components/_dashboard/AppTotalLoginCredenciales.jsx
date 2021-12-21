import React, { useState, useEffect } from "react";
import { obtenerEventosDiarios } from "../../services/Metricas";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import UbademyCard from "../Card/UbademyCard";

const AppTotalLoginCredenciales = () => {
  const [loginHoy, setLoginHoy] = useState(0);
  const [loginAyer, setLoginAyer] = useState(0);

  useEffect(() => {
    obtenerEventosDiarios("LOGIN_CREDENCIALES", 1).then((res) => {
      setLoginAyer(
        res.data.reduce(
          (accumulator, currentValue) => accumulator + currentValue.cantidad,
          0
        )
      );
    });
  }, []);

  useEffect(() => {
    obtenerEventosDiarios("LOGIN_CREDENCIALES", 0).then((res) => {
      setLoginHoy(
        res.data.reduce(
          (accumulator, currentValue) => accumulator + currentValue.cantidad,
          0
        )
      );
    });
  }, []);

  return (
    <UbademyCard
      valor={loginHoy}
      titulo="LOGIN SIN GOOGLE HOY"
      icon={LockOpenIcon}
      porcentaje={
        loginAyer === 0
          ? 0
          : (((loginHoy - loginAyer) / loginAyer) * 100).toFixed(2)
      }
      colorIcon="#f1bd2e"
      description="Respecto ayer"
    />
  );
};

export default AppTotalLoginCredenciales;
