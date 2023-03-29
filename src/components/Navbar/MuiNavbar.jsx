import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import {NavLink} from "react-router-dom";
import { useState } from "react";

import {Switch} from '@mui/material';

import ROUTES from "../../routes/ROUTES"

const pages = [
  {label: "Home Page", url:ROUTES.HOME},
  {label:"Register", url:ROUTES.REGISTER}, 
  {label: "Login Page", url:ROUTES.LOGIN}
  ];

const MuiNavbar = ({isDarkThemeBool, setIsDarkThemeFromApp}) => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <AdbIcon />
          <Typography variant="h6" noWrap>
            LOGO
          </Typography>

          {/* main navbar */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <NavLink key={page.url} to={page.url}>
                {({ isActive }) => (
                  <Typography
                    sx={{
                      my: 2,
                      display: "block",
                      p: 2,
                    }}
                  color={isActive ? "error" : "info"}>
                    {page.label}
                  </Typography>
                )}
              </NavLink>
            ))}
              
          </Box>
          <Box
            sx={{
              my: 2,
              p: 1,
            }}
          >
            <Switch value={isDarkThemeBool} onChange={setIsDarkThemeFromApp} />
          </Box>
          {/* hamburger with menu */}
          <Box
            sx={{
              flexGrow: 1,
              flex: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={"minilinks" + page.url} onClick={handleCloseNavMenu}>
                  <NavLink to={page.url}>
                    {({isActive}) => (
                        <Typography sx={{
                          my: 2,
                          color: `${isActive ? "red" : "blue"}`,
                          display: "block",
                          p: 2,
                        }}>
                          {page.label}
                        </Typography>
                      )
                    }
                    
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default MuiNavbar;
