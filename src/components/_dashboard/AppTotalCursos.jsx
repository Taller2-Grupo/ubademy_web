import React, { useState, useEffect } from "react";
import SchoolIcon from "@mui/icons-material/School";
import { obtenerCursos } from "../../services/Cursos";
import UbademyCard from "../Card/UbademyCard";

const AppTotalCursos = () => {
  const [cursos, setCursos] = useState(0);

  useEffect(() => {
    let mounted = false;
    obtenerCursos().then((res) => {
      if (mounted) return;
      setCursos(res.length);
    });

    return () => {
      mounted = true;
    };
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
