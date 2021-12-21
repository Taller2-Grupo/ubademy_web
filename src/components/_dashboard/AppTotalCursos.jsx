import React, { useState, useEffect } from "react";
import SchoolIcon from "@mui/icons-material/School";
import { obtenerCursos } from "../../services/Cursos";
import UbademyCard from "../Card/UbademyCard";

const AppTotalCursos = () => {
  const [cursos, setCursos] = useState(0);

  useEffect(() => {
    obtenerCursos().then((res) => {
      setCursos(res.length);
    });
  }, []);

  return (
    <UbademyCard
      valor={cursos}
      titulo="CURSOS TOTALES"
      icon={SchoolIcon}
      porcentaje={0}
      colorIcon="#D14343"
      description=""
    />
  );
};

export default AppTotalCursos;
