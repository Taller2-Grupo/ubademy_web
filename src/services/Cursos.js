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

export const obtenerCurso = async (id) => {
  try {
    const res = await axios.get(baseCursosUrl + "cursos/" + id);
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

export const obtenerAlumnosCurso = async (id) => {
  try {
    const res = await axios.get(baseCursosUrl + "cursos/" + id + "/alumnos");
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

export const bloquearCurso = async (id) => {
  try {
    await axios.patch(baseCursosUrl + "cursos/" + id + "/bloquear");
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

export const activarCurso = async (id) => {
  try {
    await axios.patch(baseCursosUrl + "cursos/" + id + "/activar");
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
