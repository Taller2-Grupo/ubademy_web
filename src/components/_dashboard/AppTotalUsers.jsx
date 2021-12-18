import React, { useState, useEffect } from "react";
import { alpha, styled } from "@mui/material/styles";
import { Card, Typography } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import { obtenerUsuarios } from "../../services/Usuarios";

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  textAlign: "center",
  padding: theme.spacing(5, 0),
  color: "#04297A",
  backgroundColor: "#D0F2FF",
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
  color: "#04297A",
  backgroundImage: `linear-gradient(135deg, ${alpha("#04297A", 0)} 0%, ${alpha(
    "#04297A",
    0.24
  )} 100%)`,
}));

const AppTotalUsers = () => {
  const [users, setUsers] = useState(0);
  useEffect(() => {
    obtenerUsuarios().then(({ data }) => {
      setUsers(data.length);
    });
  }, []);

  return (
    <RootStyle>
      <IconWrapperStyle>
        <GroupIcon fontSize="large" />
      </IconWrapperStyle>
      <Typography variant="h3">{users}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Total Usuarios
      </Typography>
    </RootStyle>
  );
};

export default AppTotalUsers;
