import React from "react";
import { homeSignUp, homeCursos, homeUsuarios } from "../Data";
import { InfoSection, NavBar } from "../../components";

const Home = () => {
  return (
    <>
      <NavBar />
      <InfoSection {...homeSignUp} />
      <InfoSection {...homeCursos} />
      <InfoSection {...homeUsuarios} />
    </>
  );
};

export default Home;
