import React from "react";
import { NavBar } from "../../components";
import { Grid, Typography, Box, Container } from "@mui/material";
import AppTotalUsers from "../../components/_dashboard/AppTotalUsers";
import AppTotalCursos from "../../components/_dashboard/AppTotalCursos";
import Suscripciones from "../../components/_dashboard/Suscripciones";
import TraficoDelDia from "../../components/_dashboard/TraficoDelDia";
import EventosPorHoraDelDia from "../../components/_dashboard/EventosPorHoraDelDia";
import AppTotalLoginGoogle from "../../components/_dashboard/AppTotalLoginGoogle";
import AppTotalLoginCredenciales from "../../components/_dashboard/AppTotalLoginCredenciales";
import EventosDelAnio from "../../components/_dashboard/EventosDelAnio";

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
            <AppTotalLoginGoogle />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <AppTotalLoginCredenciales />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <AppTotalCursos />
          </Grid>
          {/* 1er row Graficos */}
          <Grid item xs={12} md={6} lg={8}>
            <EventosDelAnio />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Suscripciones />
          </Grid>

          {/* 2da row Graficos */}
          <Grid item xs={12} md={6} lg={8}>
            <EventosPorHoraDelDia />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <TraficoDelDia />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Metricas;
