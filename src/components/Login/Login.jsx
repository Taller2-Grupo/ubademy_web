import React, { useState, useEffect } from "react";
import {
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Container,
  Icon,
  Form,
} from "./LoginElements";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useDispatch, useSelector } from "react-redux";
import { emailAndPasswordLogin } from "../../actions/auth";
import Alerta from "../Feedback/Alerta";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = data;

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const dispatch = useDispatch();
  const loginError = useSelector((state) => state.auth.text);

  const [textError, setTextError] = useState("");

  const handleEmailLogin = (e) => {
    e.preventDefault();
    dispatch(emailAndPasswordLogin(email, password));
  };

  useEffect(() => {
    setTextError(loginError);
  }, [textError, loginError]);

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Ubademy</Icon>
          <FormContent>
            <Form action="#" onSubmit={handleEmailLogin}>
              <Avatar
                sx={{ m: 1, bgcolor: "primary.main", justifySelf: "center" }}
              >
                <LockOutlinedIcon />
              </Avatar>
              <FormH1>Iniciar Sesión</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                type="email"
                required
                onChange={handleChange}
                value={email}
                name="email"
              ></FormInput>
              <FormLabel htmlFor="for">Contraseña</FormLabel>
              <FormInput
                type="password"
                required
                onChange={handleChange}
                value={password}
                name="password"
              ></FormInput>
              <FormButton type="submit">Login</FormButton>
            </Form>
          </FormContent>
          {textError === undefined ? (
            ""
          ) : (
            <Alerta text={textError} severity="error" />
          )}
        </FormWrap>
      </Container>
    </>
  );
};

export default Login;
