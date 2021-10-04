import React from "react";
import { homeUsuarios } from "../Data";
import { InfoSection } from "../../components";

const Usuarios = () => {
  return (
    <>
      <InfoSection {...homeUsuarios} />
    </>
  );
};

export default Usuarios;
