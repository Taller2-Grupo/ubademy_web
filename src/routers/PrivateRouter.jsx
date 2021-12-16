import React from "react";
import { Redirect, Route } from "react-router";

const PrivateRouter = ({ log, component: Component, ...resto }) => {
  // TODO =>> ACOMODAR EL REDIRECT ACA PARA QUE CUANDO SE TOCA EL F5 SE QUEDE EN ESA PAGINA
  return (
    <Route
      {...resto}
      component={(props) =>
        log ? <Component {...props} /> : <Redirect to="/auth/login" />
      }
    />
  );
};

export default PrivateRouter;
