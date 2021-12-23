import React, { useEffect, useState } from "react";
import { obtenerUsuarios } from "../../services/Usuarios";
import { Box, Card, CardContent, CardHeader, Divider } from "@mui/material";
import Chart from "react-apexcharts";
import { fNumber } from "../../utils/formatNumber";
import ChartWrapperStyle from "./ChartWrapperStyle";

const Suscripciones = (props) => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    obtenerUsuarios().then(({ data }) => {
      let resp = data.reduce((acc, value) => {
        if (!acc[value.tipo_suscripcion]) {
          acc[value.tipo_suscripcion] = 1;
        } else {
          acc[value.tipo_suscripcion]++;
        }
        return acc;
      }, {});

      let actual = [];
      for (var key in resp) {
        actual.push({
          label: key,
          value: resp[key],
        });
      }
      if (actual.length > 0) setSeries(actual);
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
    <Card {...props}>
      <CardHeader title="Suscripciones" />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 380,
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
            "No hay datos"
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default Suscripciones;
