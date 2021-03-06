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
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

const UbademyCard = ({
  titulo,
  valor,
  icon: Icon,
  porcentaje,
  colorIcon,
  description,
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
                height: 40,
                width: 40,
              }}
            >
              <Icon />
            </Avatar>
          </Grid>
        </Grid>
        {porcentaje === 0 ? (
          ""
        ) : (
          <Box
            sx={{
              pt: 2,
              display: "flex",
              alignItems: "center",
            }}
          >
            {porcentaje > 0 ? (
              <ArrowUpwardIcon color="success" />
            ) : porcentaje < 0 ? (
              <ArrowDownwardIcon color="error" />
            ) : (
              <HorizontalRuleIcon color="primary" />
            )}
            <Typography
              color={
                porcentaje > 0
                  ? "#2e7d32"
                  : porcentaje < 0
                  ? "error"
                  : "primary"
              }
              sx={{
                mr: 1,
              }}
              variant="body2"
            >
              {porcentaje > 0 ? porcentaje : porcentaje * -1}%
            </Typography>
            <Typography color="textSecondary" variant="caption">
              {description}
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default UbademyCard;
