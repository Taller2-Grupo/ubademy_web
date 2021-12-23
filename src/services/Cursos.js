import axios from "axios";
import { tokenVencido, obtenerHeader } from "./Data";
const baseGatewayUrl = "https://ubademy-gateway-7.herokuapp.com/";

export const obtenerCursos = async () => {
  try {
    const headers = obtenerHeader();
    const res = await axios.get(
      baseGatewayUrl + "redirect/cursos/cursos",
      headers
    );
    return res.data;
  } catch (error) {
    if (error.hasOwnProperty("response")) tokenVencido(error.response.status);
    return {
      ok: false,
      data: error,
    };
  }
};

export const obtenerCurso = async (id) => {
  try {
    const headers = obtenerHeader();
    const res = await axios.get(
      baseGatewayUrl + "redirect/cursos/cursos/" + id,
      headers
    );
    return {
      ok: true,
      data: res.data,
    };
  } catch (error) {
    if (error.hasOwnProperty("response")) tokenVencido(error.response.status);
    return {
      ok: false,
      data: error,
    };
  }
};

export const obtenerAlumnosCurso = async (id) => {
  try {
    const headers = obtenerHeader();
    const res = await axios.get(
      baseGatewayUrl + "redirect/cursos/cursos/" + id + "/alumnos",
      headers
    );
    return {
      ok: true,
      data: res.data,
    };
  } catch (error) {
    if (error.hasOwnProperty("response")) tokenVencido(error.response.status);
    return {
      ok: false,
      data: error,
    };
  }
};

export const bloquearCurso = async (id) => {
  try {
    const headers = obtenerHeader();
    await axios.patch(
      baseGatewayUrl + "redirect/cursos/cursos/" + id + "/bloquear",
      null,
      headers
    );
    return {
      ok: true,
    };
  } catch (error) {
    if (error.hasOwnProperty("response")) tokenVencido(error.response.status);
    return {
      ok: false,
      data: error,
    };
  }
};

export const activarCurso = async (id) => {
  try {
    const headers = obtenerHeader();
    await axios.patch(
      baseGatewayUrl + "redirect/cursos/cursos/" + id + "/activar",
      null,
      headers
    );
    return {
      ok: true,
    };
  } catch (error) {
    if (error.hasOwnProperty("response")) tokenVencido(error.response.status);
    return {
      ok: false,
      data: error,
    };
  }
};
