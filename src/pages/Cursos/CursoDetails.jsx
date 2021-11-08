import React from "react";
import { useParams } from "react-router";

const CursoDetails = () => {
  const { id } = useParams();
  return (
    <>
      <h1>Curso id: {id}</h1>
    </>
  );
};

export default CursoDetails;
