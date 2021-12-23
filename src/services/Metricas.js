import axios from "axios";
import { tokenVencido, obtenerHeader } from "./Data";
const baseGatewayUrl = "https://ubademy-gateway-7.herokuapp.com/";

export const obtenerEventosDiarios = async (
  tipoEvento = null,
  diasAtras = null
) => {
  try {
    const headers = obtenerHeader();
    const path =
      "redirect/usuarios/eventos/diarios" +
      (tipoEvento === null ? "" : "?tipoEvento=" + tipoEvento) +
      (diasAtras === null
        ? ""
        : `${tipoEvento === null ? "?" : "&"}diasAtras=${diasAtras}`);
    const res = await axios.get(baseGatewayUrl + path, headers);
    return {
      ok: true,
      data: res.data.data,
    };
  } catch (error) {
    if (error.hasOwnProperty("response")) tokenVencido(error.response.status);
    return {
      ok: false,
      data: error,
    };
  }
};

export const obtenerEventosHorarios = async (
  tipoEvento = null,
  horasAtras = null
) => {
  try {
    const headers = obtenerHeader();
    const path =
      "redirect/usuarios/eventos/por_hora" +
      (tipoEvento === null ? "" : "?tipoEvento=" + tipoEvento) +
      (horasAtras === null
        ? ""
        : `${tipoEvento === null ? "?" : "&"}horasAtras=${horasAtras}`);
    const res = await axios.get(baseGatewayUrl + path, headers);
    return {
      ok: true,
      data: res.data.data,
    };
  } catch (error) {
    if (error.hasOwnProperty("response")) tokenVencido(error.response.status);
    return {
      ok: false,
      data: error,
    };
  }
};
