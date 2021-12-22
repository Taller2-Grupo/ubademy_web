import axios from "axios";
import { tokenVencido, obtenerHeader } from "./Data";
const baseGatewayUrl = "https://ubademy-gateway-7.herokuapp.com/";

export const obtenerUsuarios = async () => {
  try {
    const headers = obtenerHeader();
    const res = await axios.get(
      baseGatewayUrl + "redirect/usuarios/usuarios",
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

export const obtenerUsuario = async (username) => {
  try {
    const headers = obtenerHeader();
    const res = await axios.get(
      baseGatewayUrl + "redirect/usuarios/usuarios/" + username,
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

export const loginUser = async (email, password) => {
  try {
    var bodyFormData = new FormData();
    bodyFormData.append("username", email);
    bodyFormData.append("password", password);

    const res = await axios.post(baseGatewayUrl + "token", bodyFormData);
    return {
      ok: true,
      data: res.data,
    };
  } catch (error) {
    return {
      ok: false,
      data: error,
    };
  }
};

export const bloquearUsuario = async (id) => {
  try {
    const headers = obtenerHeader();
    await axios.patch(
      baseGatewayUrl + "redirect/usuarios/usuarios/bloquear/" + id,
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
export const activarUsuario = async (id) => {
  try {
    const headers = obtenerHeader();
    await axios.patch(
      baseGatewayUrl + "redirect/usuarios/usuarios/activar/" + id,
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

export const crearUsuario = async (body) => {
  try {
    var bodyReq = {
      username: body.email,
      password: body.password,
      nombre: body.nombre,
      apellido: body.apellido,
      esAdmin: true,
    };

    await axios.post(baseGatewayUrl + "usuarios/registrar", bodyReq);

    return {
      ok: true,
      data: "Administrador creado correctamente",
    };
  } catch (error) {
    return {
      ok: false,
      data: error.response.data.detail,
    };
  }
};
