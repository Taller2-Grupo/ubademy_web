import React, { useState, useEffect } from "react";
import { obtenerUsuarios } from "../../services/Usuarios";
import { obtenerEventosDiarios } from "../../services/Metricas";
import UbademyCard from "../Card/UbademyCard";
import PeopleIcon from "@mui/icons-material/PeopleOutlined";

const AppTotalUsers = () => {
  const [users, setUsers] = useState(0);
  const [usersWeek, setUsersWeek] = useState(0);

  useEffect(() => {
    let mounted = false;
    obtenerEventosDiarios("USUARIO_CREADO", 7).then((res) => {
      if (mounted) return;
      setUsersWeek(
        res.data.reduce(
          (accumulator, currentValue) => accumulator + currentValue.cantidad,
          0
        )
      );
    });
    return () => {
      mounted = true;
    };
  }, []);

  useEffect(() => {
    let mounted = false;
    obtenerUsuarios().then(({ data }) => {
      if (mounted) return;
      setUsers(data.length);
    });
    return () => {
      mounted = true;
    };
  }, []);

  return (
    <UbademyCard
      valor={users}
      titulo="USUARIOS TOTALES"
      icon={PeopleIcon}
      porcentaje={
        usersWeek === 0
          ? 0
          : (((users - usersWeek) / usersWeek) * 100).toFixed(2)
      }
      colorIcon="#14B8A6"
      description="Desde la semana pasada"
    />
  );
};

export default AppTotalUsers;
