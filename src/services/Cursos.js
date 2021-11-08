import axios from "axios";
const baseCursosUrl = "https://ubademy-back.herokuapp.com/";

export const obtenerCursos = async () => {
  try {
    const res = await axios.get(baseCursosUrl + "cursos");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
