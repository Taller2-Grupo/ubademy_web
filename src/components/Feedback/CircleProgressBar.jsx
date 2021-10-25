import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";

const CircleProgressBar = ({ success }) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={!success}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default CircleProgressBar;
