import React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const ToolbarTabla = ({ titulo }) => {
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
      }}
    >
      <Typography
        sx={{ flex: "1 1 100%" }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        {titulo}
      </Typography>
    </Toolbar>
  );
};

ToolbarTabla.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default ToolbarTabla;
