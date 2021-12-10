import axios from "axios";
const baseUsersUrl = "https://ubademy-usuarios.herokuapp.com/";

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

    const res = await axios.post(
      "https://ubademy-gateway-7.herokuapp.com/token",
      bodyFormData
    );
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
