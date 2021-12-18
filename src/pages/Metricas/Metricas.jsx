import React from "react";
import { NavBar } from "../../components";
import { Grid, Typography, Box, Container } from "@mui/material";
import AppTotalUsers from "../../components/_dashboard/AppTotalUsers";
import AppTotalCursos from "../../components/_dashboard/AppTotalCursos";

const Metricas = () => {
  return (
    <>
      <NavBar />
      <Container fixed>
        <Box sx={{ pb: 5, pt: 5 }}>
          <Typography variant="h4">Dashboard</Typography>
        </Box>
        <Grid container spacing={3} justifyContent="center">
          {/* Cards */}
          <Grid item xs={12} md={4}>
            <AppTotalUsers />
          </Grid>
          <Grid item xs={12} md={4}>
            <AppTotalCursos />
          </Grid>
          {/* 1er row Graficos */}
          <Grid item xs={12} md={8}>
            Grafico 1
          </Grid>
          <Grid item xs={12} md={4}>
            Pie chart 1
          </Grid>

          {/* 2da row Graficos */}
          <Grid item xs={12} md={8}>
            Grafico 2
          </Grid>

          <Grid item xs={12} md={4}>
            Pie chart 2
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Metricas;
