import axios from "axios";
const baseUsersUrl = "https://ubademy-usuarios.herokuapp.com/";
const baseGatewayUrl = "https://ubademy-gateway-7.herokuapp.com/";

export const obtenerUsuarios = async () => {
  try {
    const res = await axios.get(baseUsersUrl + "usuarios");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerUsuario = async (username) => {
  try {
    const res = await axios.get(baseUsersUrl + "usuarios/" + username);
    return {
      ok: true,
      data: res.data,
    };
  } catch (error) {
    return {
      ok: false,
      data: "",
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
      data: "",
    };
  }
};

export const bloquearUsuario = async (id) => {
  try {
    await axios.patch(baseUsersUrl + "usuarios/bloquear/" + id);
    return {
      ok: true,
    };
  } catch (error) {
    return {
      ok: false,
      data: error,
    };
  }
};
export const activarUsuario = async (id) => {
  try {
    await axios.patch(baseUsersUrl + "usuarios/activar/" + id);
    return {
      ok: true,
    };
  } catch (error) {
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
