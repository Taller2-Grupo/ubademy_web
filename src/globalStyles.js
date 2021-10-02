import styled, { createGlobalStyle } from "styled-components";
//import { Button } from "@mui/material";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing:border-box;
        margin: 0;
        padding: 0;
        font-family: 'Source Sans Pro', sans-serif;
    }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const ButtonUbademy = styled.button`
  border-radius: 4px;
  background-color: ${({ variant }) =>
    variant === "outlined" ? "transparent" : "#038ECB"};
  white-space: nowrap;
  padding: ${({ size }) => (size === "large" ? "12px 64px" : "10px 20px")};
  color: ${({ variant }) => (variant === "outlined" ? "#038ECB" : "#fff")};
  font-size: ${({ size }) => (size === "large" ? "20px" : "16px")};
  border: ${({ variant }) =>
    variant === "outlined" ? "1px solid #038ECB" : "none"};
  cursor: pointer;
  letter-spacing: 0.02857em;

  &:hover {
    opacity: ${({ variant }) => (variant === "outlined" ? 1 : 0.8)};
    color: #fff;
    background-color: #038ecb;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyle;
