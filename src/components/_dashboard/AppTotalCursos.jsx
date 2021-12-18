import React, { useState, useEffect } from "react";
import { alpha, styled } from "@mui/material/styles";
import { Card, Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import { obtenerCursos } from "../../services/Cursos";

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  textAlign: "center",
  padding: theme.spacing(5, 0),
  color: "#015249",
  backgroundColor: "#C8FACD",
  borderRadius: 4,
}));

const IconWrapperStyle = styled("div")(({ theme }) => ({
  margin: "auto",
  display: "flex",
  borderRadius: "50%",
  alignItems: "center",
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: "center",
  marginBottom: theme.spacing(3),
  color: "#015249",
  backgroundImage: `linear-gradient(135deg, ${alpha("#015249", 0)} 0%, ${alpha(
    "#015249",
    0.24
  )} 100%)`,
}));

const AppTotalCursos = () => {
  const [cursos, setCursos] = useState(0);
  useEffect(() => {
    obtenerCursos().then((res) => {
      setCursos(res.length);
    });
  }, []);

  return (
    <RootStyle>
      <IconWrapperStyle>
        <SchoolIcon fontSize="large" />
      </IconWrapperStyle>
      <Typography variant="h3">{cursos}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Total Cursos
      </Typography>
    </RootStyle>
  );
};

export default AppTotalCursos;
