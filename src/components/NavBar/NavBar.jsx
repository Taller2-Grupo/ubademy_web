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
  NavMenuUser,
} from "./NavBarElements";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/auth";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const nameUser = useSelector((state) => state.auth.displayName);

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

  const dispath = useDispatch();
  const handleLogout = () => {
    dispath(logout());
  };

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
            </NavMenu>
            <NavMenuUser>
              <NavItem>
                <NavLinks to="/">{nameUser}</NavLinks>
              </NavItem>

              <NavItemBtn onClick={handleLogout}>
                {button ? (
                  <NavBtnLink to="/auth/login">
                    <ButtonUbademy variant="contained" size="medium">
                      Logout
                    </ButtonUbademy>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/auth/login">
                    <ButtonUbademy variant="contained" size="large">
                      Logout
                    </ButtonUbademy>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenuUser>
          </NavBarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default NavBar;
