import React from "react";
import logo from "../../images/ubademy.png";
import { FaSlack, FaGithub, FaDiscord } from "react-icons/fa";

import {
  FooterContainer,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTittle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  Logo,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTittle>About Us</FooterLinkTittle>
            <FooterLink to="/sign-up">Como empezar</FooterLink>
            <FooterLink to="/quienes-somos">Quiénes somos?</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTittle>Contacto</FooterLinkTittle>
            <FooterLink to="/contacto">Contactenos</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTittle>Documentación</FooterLinkTittle>
            <FooterLink to="/manual-de-usuario">Manual de Usuario</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <Logo src={logo} alt="Logo" />
            Ubademy
          </SocialLogo>
          <WebsiteRights>
            Taller de Programación II - Grupo 7 © 2do Cuatrimestre de 2021
          </WebsiteRights>
          <SocialIcons>
            <SocialIconLink
              href="https://join.slack.com/t/7552-tallerii/shared_invite/zt-vech5d0j-hFH781ZCHC7MTA4B8LOLSA"
              target="_blank"
              aria-label="Slack"
            >
              <FaSlack />
            </SocialIconLink>
            <SocialIconLink
              href="https://discord.gg/XUXjfN53"
              target="_blank"
              aria-label="Discord"
            >
              <FaDiscord />
            </SocialIconLink>
            <SocialIconLink
              href="https://github.com/Taller2-Grupo"
              target="_blank"
              aria-label="Github"
            >
              <FaGithub />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
