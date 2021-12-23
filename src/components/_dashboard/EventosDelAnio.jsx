import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, CardHeader, Divider } from "@mui/material";
import { obtenerEventosDiarios } from "../../services/Metricas";
import Chart from "react-apexcharts";

const labels = [
  { key: "USUARIO_CREADO", label: "Usuarios creados" },
  { key: "USUARIO_BLOQUEADO", label: "Usuarios bloqueados" },
  { key: "LOGIN_GOOGLE", label: "Login con google" },
  { key: "LOGIN_CREDENCIALES", label: "Login con credenciales" },
];

const hoy = new Date();

const mesesDelAnio = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const categories = Array.from(
  { length: hoy.getMonth() + 1 },
  (_, i) => mesesDelAnio[i]
);

const sortByMonth = (a, b) => {
  const a_month = new Date(a.fecha).getMonth();
  const b_month = new Date(b.fecha).getMonth();
  if (a_month > b_month) {
    return 1;
  }
  if (a_month < b_month) {
    return -1;
  }
  return 0;
};

const EventosDelAnio = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    labels.forEach((it) => {
      obtenerEventosDiarios(it.key, 365).then((res) => {
        const resp = res.data
          .filter((x) => new Date(x.fecha).getFullYear() <= hoy.getFullYear())
          .sort(sortByMonth)
          .reduce((acc, value) => {
            let month = mesesDelAnio[new Date(value.fecha).getMonth()];
            if (!acc[month]) {
              acc[month] = value.cantidad;
            } else {
              acc[month] += value.cantidad;
            }
            return acc;
          }, {});

        let actual = [];
        categories.forEach((mes) => {
          actual.push(!resp[mes] ? 0 : resp[mes]);
        });

        setSeries((series) => [
          ...series,
          {
            name: it.label,
            data: actual,
          },
        ]);
      });
    });
  }, []);

  const options = {
    chart: {
      height: 350,
      type: "radar",
      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1,
      },
    },
    stroke: {
      width: 2,
    },
    fill: {
      opacity: 0.1,
    },
    markers: {
      size: 0,
    },
    xaxis: {
      categories: categories,
    },
  };
  return (
    <Card>
      <CardHeader title="Eventos del año" />
      <Divider />
      <CardContent>
        <Box dir="ltr">
          <Chart type="radar" series={series} options={options} height={364} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default EventosDelAnio;
