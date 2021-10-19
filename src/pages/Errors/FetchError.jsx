import React from "react";
import PropTypes from "prop-types";

const FetchError = ({ fetch }) => {
  return (
    <>
      <h1>Error al querer obtener {fetch}</h1>
    </>
  );
};

FetchError.propTypes = {
  fetch: PropTypes.string.isRequired,
};

export default FetchError;
