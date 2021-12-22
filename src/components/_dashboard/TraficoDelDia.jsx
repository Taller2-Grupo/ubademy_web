import React, { useEffect, useState } from "react";
import { obtenerEventosDiarios } from "../../services/Metricas";
import { Box, Card, CardContent, CardHeader, Divider } from "@mui/material";
import Chart from "react-apexcharts";

const labels = [
  { key: "USUARIO_CREADO", label: "Usuarios creados" },
  { key: "USUARIO_BLOQUEADO", label: "Usuarios bloqueados" },
  { key: "LOGIN_GOOGLE", label: "Login con google" },
  { key: "LOGIN_CREDENCIALES", label: "Login con credenciales" },
];

const TraficoDelDia = (props) => {
  const [series, setSeries] = useState([{ label: "", value: "0" }]);

  useEffect(() => {
    let actual = [];
    labels.forEach((it) => {
      obtenerEventosDiarios(it.key, 5).then((res) => {
        const value = res.data.reduce(
          (accumulator, currentValue) => accumulator + currentValue.cantidad,
          0
        );
        if (value !== 0) {
          actual.push({
            label: it.label,
            value: value,
          });
        }
      });
    });
    if (actual.length > 0) setSeries(actual);
  }, []);

  const options = {
    chart: {
      type: "pie",
    },
    labels: series.map((x) => x.label),
    legend: {
      position: "bottom",
    },
  };

  return (
    <Card {...props}>
      <CardHeader title="Eventos del día" />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 400,
            position: "relative",
          }}
        >
          {series.length > 0 ? (
            <Chart
              options={options}
              series={series.map((x) => x.value)}
              type="pie"
              height={350}
              width={350}
            />
          ) : (
            ""
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default TraficoDelDia;
