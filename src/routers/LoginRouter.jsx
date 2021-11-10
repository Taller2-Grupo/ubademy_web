import React from "react";
import { Switch, Route } from "react-router";
import Home from "../pages/HomePage/Home";
import Cursos from "../pages/Cursos/Cursos";
import Usuarios from "../pages/Usuarios/Usuarios";
import CursoDetails from "../pages/Cursos/CursoDetails";
import UsuarioDetails from "../pages/Usuarios/UsuarioDetails";

const LoginRouter = () => {
  return (
    <>
      <Switch>
        <Route path="/cursos" exact component={Cursos}></Route>
        <Route path="/cursos/:id" exact component={CursoDetails}></Route>
        <Route path="/usuarios" exact component={Usuarios}></Route>
        <Route
          path="/usuarios/:username"
          exact
          component={UsuarioDetails}
        ></Route>
        <Route path="/" exact component={Home}></Route>
      </Switch>
    </>
  );
};

export default LoginRouter;
