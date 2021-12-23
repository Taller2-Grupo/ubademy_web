import React, { useState, useEffect } from "react";
import { Box, Card, CardContent, CardHeader, Divider } from "@mui/material";
import Chart from "react-apexcharts";
import { obtenerEventosHorarios } from "../../services/Metricas";

const hoy = new Date();

const sortByHour = (a, b) => {
  const a_hour = new Date(a.fecha).getHours();
  const b_hour = new Date(b.fecha).getHours();
  if (a_hour > b_hour) {
    return 1;
  }
  if (a_hour < b_hour) {
    return -1;
  }
  return 0;
};

const labels = {
  USUARIO_CREADO: { name: "Usuarios creados", chart: "column" },
  USUARIO_BLOQUEADO: { name: "Usuarios bloqueados", chart: "area" },
  LOGIN_GOOGLE: { name: "Login con google", chart: "line" },
  LOGIN_CREDENCIALES: { name: "Login con credenciales", chart: "line" },
};

const EventosPorHoraDelDia = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    let mounted = false;
    obtenerEventosHorarios(null, hoy.getHours()).then((res) => {
      if (mounted) return;
      const resp = res.data.sort(sortByHour).reduce((acc, value) => {
        let name = labels[value.tipoEvento].name;
        let chart = labels[value.tipoEvento].chart;
        let fecha = new Date(value.fecha);
        if (!acc[name]) {
          acc[name] = {
            fecha: [fecha.getHours() + ":" + fecha.getMinutes()],
            type: chart,
            data: [value.cantidad],
          };
        } else {
          acc[name] = {
            fecha: [
              ...acc[name].fecha,
              fecha.getHours() + ":" + fecha.getMinutes(),
            ],
            type: chart,
            data: [...acc[name].data, value.cantidad],
          };
        }
        return acc;
      }, {});

      let actual = [];
      for (var key in resp) {
        actual.push({
          name: key,
          type: resp[key].type,
          data: resp[key].data,
          fecha: resp[key].fecha,
        });
      }
      if (actual.length > 0) setSeries(actual);
    });
    return () => {
      mounted = true;
    };
  }, []);

  const options = {
    char: {
      zoom: {
        enabled: false,
      },
    },
    stroke: { width: [0, 2, 3, 3], curve: "straight" },
    plotOptions: { bar: { columnWidth: "11%", borderRadius: 4 } },
    fill: {
      type: series.length > 0 ? series.map((x) => "solid") : [],
      opacity:
        series.length > 0
          ? series.map((x) => (x.type === "area" ? 0.1 : 1))
          : [],
    },
    labels:
      series.length > 0
        ? series.reduce((max, obj) =>
            max.fecha.length > obj.fecha.length ? max : obj
          ).fecha
        : [],
    xaxis: { type: "string" },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== "undefined") {
            return `${y.toFixed(0)} visits`;
          }
          return y;
        },
      },
    },
  };

  return (
    <Card>
      <CardHeader title="Eventos del día por hora" />
      <Divider />
      <CardContent>
        {series.length > 0 ? (
          <Box dir="ltr">
            <Chart
              type="line"
              series={series.map((x) => {
                return {
                  name: x.name,
                  type: x.type,
                  data: x.data,
                };
              })}
              options={options}
              height={350}
            />
          </Box>
        ) : (
          "No se encontraron eventos actualmente."
        )}
      </CardContent>
    </Card>
  );
};

export default EventosPorHoraDelDia;
