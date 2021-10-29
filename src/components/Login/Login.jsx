import React, { useState } from "react";
import {
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Text,
  Container,
  Icon,
  Form,
  GoogleLoginButton,
} from "./LoginElements";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { useDispatch } from "react-redux";
import {
  googleLogin,
  emailAndPasswordLogin,
  emailCorrecto,
} from "../../actions/auth";

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

  const handleGoogleLogin = () => {
    dispatch(googleLogin());
  };
  const handleEmailLogin = (e) => {
    e.preventDefault();

    if (!emailCorrecto(email)) return;
    dispatch(emailAndPasswordLogin(email, password));
  };

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
              <Text onCl>Olvidaste tu contraseña?</Text>

              <br />
              <GoogleLoginButton
                label="Ingresar con Google"
                onClick={handleGoogleLogin}
              />
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Login;
