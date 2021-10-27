import React from "react";
import { Route, Redirect } from "react-router";

const PublicRouter = ({ log, component: Component, ...resto }) => {
  return (
    <Route
      {...resto}
      component={(props) =>
        !log ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PublicRouter;
