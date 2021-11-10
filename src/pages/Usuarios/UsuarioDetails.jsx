import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  Container,
  FormWrap,
  FormContent,
  Form,
} from "../../components/Details/DetailsElements";
import { obtenerUsuario } from "../../services/Usuarios";
import { NavBar } from "../../components";
import CircleProgressBar from "../../components/Feedback/CircleProgressBar";
import Alerta from "../../components/Feedback/Alerta";
import dateFormat from "dateformat";

const UsuarioDetails = () => {
  const { username } = useParams();

  const [alumno, setAlumno] = useState({
    username: "",
    nombre: "",
    apellido: "",
    esAdmin: "",
    fechaCreacion: "",
    fechaActualizacion: null,
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;
    obtenerUsuario(username).then((res) => {
      if (isMounted && res.ok) {
        setAlumno(res.data);
        setSuccess(true);
      } else {
        setError("Error al obtener el curso.");
      }
      return () => {
        isMounted = false;
      };
    });
  }, [username]);

  return (
    <>
      <NavBar />
      <CircleProgressBar success={success} />
      <Container>
        <FormWrap>
          <FormContent>
            <Form>
              <Typography variant="h1" color="#74BBE6">
                {alumno.Nombre + alumno.apellido}
              </Typography>
              <Typography variant="h2" color="#a9b3c1">
                {alumno.descripcion}
              </Typography>
              <Typography variant="h4" color="#696590">
                Fecha Creacion:
                {alumno.fechaCreacion === ""
                  ? ""
                  : dateFormat(alumno.fechaCreacion, "yyyy-mm-dd hh:MM")}
              </Typography>
              <Typography variant="h4" color="#696590">
                Fecha Actualizacion:
                {alumno.fechaActualizacion === ""
                  ? ""
                  : dateFormat(alumno.fechaActualizacion, "yyyy-mm-dd hh:MM")}
              </Typography>
              <Typography variant="h4" color="#B9DEF2">
                {alumno.esAdmin}
              </Typography>
            </Form>
          </FormContent>
          {error === "" ? "" : <Alerta text={error} severity="error" />}
        </FormWrap>
      </Container>
    </>
  );
};

export default UsuarioDetails;
