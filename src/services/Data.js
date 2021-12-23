import { logout } from "../actions/auth";

export const obtenerHeader = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const tokenVencido = (status) => {
  if (status === 401) {
    logout();
    window.location.reload(false);
  }
};
