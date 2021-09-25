import homeImagen from "../images/home-imagen.svg";
import cursosImagen from "../images/cursos-imagen.svg";
import usuariosImagen from "../images/users-imagen.svg";

export const homeObjOne = {
  primary: true,
  lightBg: false,
  imgStart: true,
  lightTopLine: true,
  topLine: "Taller de Programación II - Grupo 7",
  lightText: true,
  headLine: "Ubademy Back Office",
  lightTextDesc: true,
  description:
    "Esta es la página de Ubademy para Administradores. En esta aplicación podrá ver métricas de los servicios que tiene, para realizar un seguimiento y poder administrarlos de una buena manera.",
  buttonLabel: "Get Started",
  img: homeImagen,
  alt: "Image Home",
  start: true,
};

export const homeObjTwo = {
  primary: false,
  lightBg: true,
  imgStart: false,
  lightTopLine: false,
  topLine: "Taller de Programación II - Grupo 7",
  lightText: false,
  headLine: "Administrar Cursos",
  lightTextDesc: false,
  description:
    "Esta aplicación les permitirá todo lo correspondiente a la administración de cursos: Alta, Baja, Modificación y Vista de los mismos. A su vez podrá ver algunas métricas correspondientes",
  buttonLabel: "Get Started",
  img: cursosImagen,
  alt: "Imagen Cursos",
  start: false,
};

export const homeObjThree = {
  primary: true,
  lightBg: false,
  imgStart: true,
  lightTopLine: true,
  topLine: "Taller de Programación II - Grupo 7",
  lightText: true,
  headLine: "Administrar Usuarios",
  lightTextDesc: true,
  description:
    "Esta aplicación les permitirá todo lo correspondiente a la administración de usuarios: Alta, Baja, Modificación y Vista de los mismos. A su vez podrá ver algunas métricas correspondientes",
  buttonLabel: "Get Started",
  img: usuariosImagen,
  alt: "Imagen Usuarios",
  start: true,
};
