import React from "react";
import { homeSignUp } from "../Data";
import { InfoSection } from "../../components";
import { NavBar } from "../../components";

const SignUp = () => {
  return (
    <>
      <NavBar />
      <InfoSection {...homeSignUp} />
    </>
  );
};

export default SignUp;
