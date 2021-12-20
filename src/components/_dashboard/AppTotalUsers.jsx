import React, { useState, useEffect } from "react";
import { obtenerUsuarios } from "../../services/Usuarios";
import UbademyCard from "../Card/UbademyCard";
import PeopleIcon from "@mui/icons-material/PeopleOutlined";

const AppTotalUsers = () => {
  const [users, setUsers] = useState(0);
  useEffect(() => {
    obtenerUsuarios().then(({ data }) => {
      setUsers(data.length);
    });
  }, []);

  return (
    <UbademyCard
      valor={users}
      titulo="USUARIOS TOTALES"
      icon={PeopleIcon}
      porcentaje={12}
      colorIcon="#14B8A6"
    />
  );
};

export default AppTotalUsers;
