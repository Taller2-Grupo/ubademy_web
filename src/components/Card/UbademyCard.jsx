import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import React from "react";
import {
  Card,
  Typography,
  Grid,
  CardContent,
  Avatar,
  Box,
} from "@mui/material";

const UbademyCard = ({
  titulo,
  valor,
  icon: Icon,
  porcentaje,
  colorIcon,
  ...props
}) => {
  return (
    <Card sx={{ height: "100%" }} {...props}>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="overline">
              {titulo}
            </Typography>
            <Typography color="textPrimary" variant="h4">
              {valor}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: colorIcon,
                height: 56,
                width: 56,
              }}
            >
              <Icon />
            </Avatar>
          </Grid>
        </Grid>
        <Box
          sx={{
            pt: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          {porcentaje > 0 ? (
            <ArrowUpwardIcon color="success" />
          ) : (
            <ArrowDownwardIcon color="error" />
          )}
          <Typography
            color={porcentaje > 0 ? "#2e7d32" : "error"}
            sx={{
              mr: 1,
            }}
            variant="body2"
          >
            {porcentaje > 0 ? porcentaje : porcentaje * -1}%
          </Typography>
          <Typography color="textSecondary" variant="caption">
            Desde la semana pasada
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default UbademyCard;
