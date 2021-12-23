import React, { useState, useEffect } from "react";
import { obtenerEventosDiarios } from "../../services/Metricas";
import GoogleIcon from "@mui/icons-material/Google";
import UbademyCard from "../Card/UbademyCard";

const AppTotalLoginGoogle = () => {
  const [loginHoy, setLoginHoy] = useState(0);
  const [loginAyer, setLoginAyer] = useState(0);

  useEffect(() => {
    obtenerEventosDiarios("LOGIN_GOOGLE", 1).then((res) => {
      setLoginAyer(
        res.data.reduce(
          (accumulator, currentValue) => accumulator + currentValue.cantidad,
          0
        )
      );
    });
  }, []);

  useEffect(() => {
    obtenerEventosDiarios("LOGIN_GOOGLE", 0).then((res) => {
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
      titulo="LOGIN GOOGLE DEL DÍA"
      icon={GoogleIcon}
      porcentaje={
        loginAyer === 0
          ? 0
          : (((loginHoy - loginAyer) / loginAyer) * 100).toFixed(2)
      }
      colorIcon="#8927ca"
      description="Respecto ayer"
    />
  );
};

export default AppTotalLoginGoogle;
