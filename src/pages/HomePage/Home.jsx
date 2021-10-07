import React from "react";
import { homeSignUp, homeCursos, homeUsuarios } from "../Data";
import { InfoSection } from "../../components";

const Home = () => {
  return (
    <>
      <InfoSection {...homeSignUp} />
      <InfoSection {...homeCursos} />
      <InfoSection {...homeUsuarios} />
    </>
  );
};

export default Home;
