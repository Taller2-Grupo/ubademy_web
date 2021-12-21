import React from "react";
import { NavBar } from "../../components";
import { Grid, Typography, Box, Container } from "@mui/material";
import AppTotalUsers from "../../components/_dashboard/AppTotalUsers";
import AppTotalCursos from "../../components/_dashboard/AppTotalCursos";
import TiposDeLogueos from "../../components/_dashboard/TiposDeLogueos";
import TraficoDelDia from "../../components/_dashboard/TraficoDelDia";

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
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <AppTotalUsers />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <AppTotalCursos />
          </Grid>
          {/* 1er row Graficos */}
          <Grid item xs={12} md={8}>
            Grafico de barras o algo
          </Grid>
          <Grid item xs={12} md={4}>
            <TiposDeLogueos sx={{ height: "100%" }} />
          </Grid>

          {/* 2da row Graficos */}
          <Grid item xs={12} md={8}>
            <TraficoDelDia />
          </Grid>

          <Grid item xs={12} md={4}>
            Pie chart o alguna otra cosa
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Metricas;