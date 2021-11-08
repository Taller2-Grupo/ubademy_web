import React from "react";
import { useParams } from "react-router";

const UsuarioDetails = () => {
  const { id } = useParams();
  return (
    <>
      <h1>Usuario id: {id}</h1>
    </>
  );
};

export default UsuarioDetails;
