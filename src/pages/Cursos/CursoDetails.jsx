import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  Container,
  FormWrap,
  FormContent,
  Form,
} from "../../components/Details/DetailsElements";
import Tabla from "../../components/Tabla/Tabla";
import { obtenerAlumnosCurso, obtenerCurso } from "../../services/Cursos";
import { NavBar } from "../../components";
import CircleProgressBar from "../../components/Feedback/CircleProgressBar";
import Alerta from "../../components/Feedback/Alerta";
import dateFormat from "dateformat";
import { headCells } from "../Usuarios/Data";

const CursoDetails = () => {
  const { id } = useParams();

  const [curso, setCurso] = useState({
    titulo: "",
    descripcion: "",
    hashtags: "",
    tipo: "",
    examenes: "",
    suscripcion: "",
    ubicacion: "",
    estado: "",
    fecha_creacion: "",
    fecha_actualizacion: null,
  });
  const [alumnos, setAlumnos] = useState([]);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = false;
    obtenerCurso(id).then((res) => {
      if (mounted) return;
      if (res.ok) {
        setCurso(res.data);
        obtenerAlumnosCurso(id).then((resp) => {
          resp.ok
            ? setAlumnos(alumnos)
            : setError("Error al obtener los alumnos.");
        });
        setSuccess(true);
      } else {
        setError("Error al obtener el curso.");
      }
    });
    return () => {
      mounted = true;
    };
  }, [id, alumnos]);

  return (
    <>
      <NavBar />
      <CircleProgressBar success={success} />
      <Container>
        <FormWrap>
          <FormContent>
            <Form>
              <Typography variant="h1" color="#74BBE6">
                {curso.titulo}
              </Typography>
              <Typography variant="h2" color="#a9b3c1">
                {curso.descripcion}
              </Typography>
              <Typography variant="h4" color="#696590">
                Creacion:{" "}
                {curso.fecha_creacion === ""
                  ? ""
                  : dateFormat(curso.fecha_creacion, "yyyy-mm-dd hh:MM")}
                - Actualizacion:{" "}
                {curso.fecha_actualizacion === null
                  ? ""
                  : dateFormat(curso.fecha_actualizacion, "yyyy-mm-dd hh:MM")}
              </Typography>
              <Typography variant="h4" color="#B9DEF2">
                Estado: {curso.estado} - Ubicacion: {curso.ubicacion}
              </Typography>
              <Typography variant="h4" color="#f7f8fa">
                Hashtags: {curso.hashtags} - Suscripcion: {curso.suscripcion} -
                Tipo: {curso.tipo}
              </Typography>
              {alumnos.length > 0 ? (
                <Tabla
                  headCells={headCells}
                  rows={alumnos}
                  titulo="Alumnos Inscriptos"
                  baseRedirect="/usuarios/"
                />
              ) : (
                <Typography variant="h5" color="#e6be74">
                  No tiene alumnos inscriptos
                </Typography>
              )}
            </Form>
          </FormContent>
          {error === "" ? "" : <Alerta text={error} severity="error" />}
        </FormWrap>
      </Container>
    </>
  );
};

export default CursoDetails;
