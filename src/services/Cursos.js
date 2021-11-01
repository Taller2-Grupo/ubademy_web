import axios from "axios";

const baseCursosUrl = "https://ubademy-back.herokuapp.com/";
const baseUsersUrl = "https://ubademy-usuarios.herokuapp.com/";

export const obtenerCursos = async () => {
  try {
    const res = await axios.get(baseCursosUrl + "cursos");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerUsuarios = async () => {
  try {
    const res = await axios.get(baseUsersUrl + "usuarios");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
