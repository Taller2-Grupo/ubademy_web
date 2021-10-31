import React from "react";
import { homeUsuarios } from "../Data";
import { InfoSection, NavBar } from "../../components";

const Usuarios = () => {
  return (
    <>
      <NavBar />
      <InfoSection {...homeUsuarios} />
    </>
  );
};

export default Usuarios;
