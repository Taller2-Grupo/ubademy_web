import { types } from "../types/types";
import jwt from "jwt-decode";
import { loginUser } from "../services/Usuarios";

/* Login */
export const login = (token) => {
  let user = jwt(token);
  if (!user.scopes.includes("admin")) throw new Error();
  localStorage.setItem("token", token);
  localStorage.setItem("username", user.sub);
  return {
    type: types.login,
    payload: {
      token: token,
      username: user.sub,
    },
  };
};

export const logError = (text) => {
  return {
    type: types.error,
    payload: {
      text,
    },
  };
};

export const emailAndPasswordLogin = (email, password) => {
  const token = localStorage.getItem("token");

  return (dispatch) => {
    if (token !== null) dispatch(login(token));
    else {
      loginUser(email, password)
        .then((res) => {
          !res.ok
            ? dispatch(logError("Usuario y/o contraseña invalida."))
            : dispatch(login(res.data.access_token));
        })
        .catch(() =>
          dispatch(logError("El usuario ingresado no es Administrador."))
        );
    }
  };
};

/* Logout */
export const logout = () => {
  localStorage.clear();
  return (dispatch) => {
    dispatch({
      type: types.logout,
    });
  };
};
