import React, { useEffect, useState } from "react";
import { obtenerEventosDiarios } from "../../services/Metricas";
import { Box, Card, CardContent, CardHeader, Divider } from "@mui/material";
import Chart from "react-apexcharts";
import { fNumber } from "../../utils/formatNumber";
import ChartWrapperStyle from "./ChartWrapperStyle";

const labels = [
  { key: "USUARIO_CREADO", label: "Usuarios creados" },
  { key: "USUARIO_BLOQUEADO", label: "Usuarios bloqueados" },
  { key: "LOGIN_GOOGLE", label: "Login con google" },
  { key: "LOGIN_CREDENCIALES", label: "Login con credenciales" },
];

const TraficoDelDia = (props) => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    labels.forEach((it) => {
      obtenerEventosDiarios(it.key, 0).then((res) => {
        const value = res.data.reduce((acc, value) => acc + value.cantidad, 0);
        if (value !== 0) {
          setSeries((series) => [
            ...series,
            {
              label: it.label,
              value: value,
            },
          ]);
        }
      });
    });
  }, []);

  const options = {
    chart: {
      type: "pie",
    },
    labels: series.map((x) => x.label),
    legend: {
      position: "bottom",
    },
    dataLabels: {
      enabled: true,
      dropShadow: { enabled: false },
      background: {
        enabled: true,
        foreColor: "#000",
      },
    },
    tooltip: {
      fillSeriesColor: false,
      y: {
        formatter: (seriesName) => fNumber(seriesName),
        title: {
          formatter: (seriesName) => `#${seriesName}`,
        },
      },
    },
    plotOptions: {
      pie: { donut: { labels: { show: false } } },
    },
  };

  return (
    <Card {...props} sx={{ marginBottom: 5 }}>
      <CardHeader title="Eventos del día" />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 364,
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {series.length > 0 ? (
            <ChartWrapperStyle>
              <Chart
                options={options}
                series={series.map((x) => x.value)}
                type="pie"
                width={364}
                height={364}
              />
            </ChartWrapperStyle>
          ) : (
            "No se encontraron eventos"
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default TraficoDelDia;
