import React, { useState, useEffect } from "react";
import logo from "../../images/ubademy.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { ButtonUbademy } from "../../globalStyles";
import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtnLink,
  NavItemBtn,
  ImgLogo,
} from "./NavBarElements";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavBarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <ImgLogo src={logo} alt="Logo" />
              Ubademy
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>

            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">Home</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/cursos">Cursos</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/usuarios">Usuarios</NavLinks>
              </NavItem>

              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/sign-up">
                    <ButtonUbademy variant="outlined" size="medium">
                      Sign Up
                    </ButtonUbademy>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/sign-up">
                    <ButtonUbademy variant="outlined" size="large">
                      Sign Up
                    </ButtonUbademy>
                  </NavBtnLink>
                )}
              </NavItemBtn>

              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/login">
                    <ButtonUbademy variant="contained" size="medium">
                      Login
                    </ButtonUbademy>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/login">
                    <ButtonUbademy variant="contained" size="large">
                      Login
                    </ButtonUbademy>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavBarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default NavBar;
