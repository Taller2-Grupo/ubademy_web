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
