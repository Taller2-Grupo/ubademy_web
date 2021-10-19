import React from "react";
import { homeUsuarios } from "../Data";
import { InfoSection } from "../../components";
import { NavBar } from "../../components";

const Usuarios = () => {
  return (
    <>
      <NavBar />
      <InfoSection {...homeUsuarios} />
    </>
  );
};

export default Usuarios;
