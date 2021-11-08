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
