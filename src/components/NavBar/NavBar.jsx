import React from 'react'
import {AppBar, Box, Toolbar, Button, IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../Logo';
import "./Navbar.css"

const NavBar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="nav-bar">
          <div className="nav-logo">
            <Logo />
          </div>

          <div className="nav-items">
            <Button color="inherit">Cursos</Button>
            <Button color="inherit">Usuarios</Button>
            <IconButton
              size="large"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}

export default NavBar
