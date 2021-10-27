import React from "react";
import { homeSignUp } from "../Data";
import { InfoSection } from "../../components";
import { NavBar } from "../../components";

const SignUp = () => {
  return (
    <>
      <InfoSection {...homeSignUp} />
    </>
  );
};

export default SignUp;
