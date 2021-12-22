import React, { useEffect, useState } from "react";
import { obtenerUsuarios } from "../../services/Usuarios";
import { Box, Card, CardContent, CardHeader, Divider } from "@mui/material";
import Chart from "react-apexcharts";

const Suscripciones = (props) => {
  const [series, setSeries] = useState([{ label: "", value: "0" }]);

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
  };

  return (
    <Card {...props}>
      <CardHeader title="Suscripciones" />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 400,
            position: "relative",
          }}
        >
          {series[0].label !== "" ? (
            <Chart
              options={options}
              series={series.map((x) => x.value)}
              type="pie"
              height={300}
              width={300}
            />
          ) : (
            "No hay datos"
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default Suscripciones;
