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
      titulo="CURSOS TOTAL"
      icon={SchoolIcon}
      porcentaje={-8}
      colorIcon="#D14343"
    />
  );
};

export default AppTotalCursos;
