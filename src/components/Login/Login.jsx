import React from "react";
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
} from "./LoginElements";

const Login = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Ubademy</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Iniciar Sesión</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required></FormInput>
              <FormLabel htmlFor="for">Contraseña</FormLabel>
              <FormInput type="password" required></FormInput>
              <FormButton type="submit">Login</FormButton>
              <Text>Olvidaste tu contraseña?</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Login;
