import React from "react";
import { Switch, Route } from "react-router";
import Home from "../pages/HomePage/Home";
import Cursos from "../pages/Cursos/Cursos";
import Usuarios from "../pages/Usuarios/Usuarios";

const LoginRouter = () => {
  return (
    <>
      <Switch>
        <Route path="/cursos" component={Cursos}></Route>
        <Route path="/usuarios" component={Usuarios}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
    </>
  );
};

export default LoginRouter;
