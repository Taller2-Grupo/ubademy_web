import React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

const Alerta = ({ text, severity }) => {
  const [open, setOpen] = React.useState(true);
  return (
    <Box
      sx={{
        width: "auto",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          severity={severity}
          sx={{ mb: 2 }}
        >
          {text}
        </Alert>
      </Collapse>
    </Box>
  );
};

export default Alerta;
