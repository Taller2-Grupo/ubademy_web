import axios from "axios";

const baseUrl = "https://ubademy-back.herokuapp.com/";

export const obtenerCursos = async () => {
  try {
    const res = await axios.get(baseUrl + "cursos");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
