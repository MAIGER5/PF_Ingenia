import React from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Box,
  IconButton,
  Link,
  Typography,
  Badge
} from "@mui/material";
import { ColorModeContext } from "../Layout";
import { useTheme } from "@emotion/react";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuAvatar from "./MenuAvatar";
import SearchBar from "./SearchBar";
import SingInButtons from "./SingInButtons";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector } from "react-redux";





export default function NavBar() {

  //Badge para el cart desde el navbar
  const cart = useSelector((state)=> state.allCourse)
  const cartCourses = cart.length
  
  //let loginUser = { type: 0 };
  let userType = 0;

  //prevengo un dato "loginUser.userType = null"
  if (localStorage.getItem("userType") == null) {
    localStorage.setItem("userType", "0");
  }

  // Consulto qué tipo de usuario está registrado
  if (localStorage.getItem("userType") != 0) {
    userType = parseInt(localStorage.getItem("userType"), 10);
  } 

  // Modo Dark/Ligth
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const themeMode = theme.palette.mode === "light" ? "black" : "white";

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{ bgcolor: "background.default" }}
        >
        <div
          style={{
            display: "flex",
            flexGrow: 1,
            justifyContent: "space-between",
            margin: "30px 30px 25px 0",
          }}
          >
            {/* Logo ingenia */}
          <Link href="/" underline="none">
            <Typography
              variant="h5"
              sx={{ fontSize: "36px", fontWeight: "700", marginLeft: "40px" }}
            >
              Ingenia
            </Typography>
          </Link>

          {/* SearchBar */}
          <SearchBar />

          <div
            style={{
              display: "flex",
              // justifyContent: "center",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "10px",
              width: "500px",
              marginLeft: "-80px",
              position: "relative",
            }}
          >
            {/* Mis Cursos */}
            {userType === 1 ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  width: "430px",
                }}
              >
                <NavLink
                  style={{
                    textDecoration: "none",
                    color: "#FF8906",
                    fontSize: "20px",
                    width: "100px",
                    marginRight: "30px",
                  }}
                  to={"/MyCourses"}
                >
                  <p>Mis cursos</p>
                </NavLink>

                  {/* Favoritos */}
                <Box>
                  <NavLink to={"/MyCourses"}>
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="label"
                    >                      

                      <FavoriteIcon />
                    </IconButton>
                  </NavLink>
                </Box>

                <Box>
                  <NavLink to={"/Notifications"}>
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="label"
                    >                      

                      <NotificationsIcon />
                    </IconButton>
                  </NavLink>
                </Box>
              </div>
            ) : null}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "10px",
                marginLeft: "-200px",
              }}
            >
              {/* Carrito */}
              <Box>
                <NavLink to="/Carrito">
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="label"
                  >
                    {/* <input hidden accept="image/*" type="file" /> */}
                    <Badge badgeContent={cartCourses} color="secondary">
                      <ShoppingCartIcon />
                    </Badge>
                  </IconButton>
                </NavLink>
              </Box>

              {/* Mode Dark/Ligth */}
              <Box
                sx={{
                  display: "flex",
                  /* width: "100%", */
                  alignItems: "center",
                  justifyContent: "center",
                  color: "text.primary",
                  borderRadius: 1,
                  p: 0,
                }}
              >
                <IconButton
                  sx={{ ml: 1 }}
                  onClick={colorMode.toggleColorMode}
                  color="inherit"
                >
                  {theme.palette.mode === "dark" ? (
                    <DarkModeIcon color="primary" />
                  ) : (
                    <LightModeIcon color="primary" />
                  )}
                </IconButton>
              </Box>
            </div>

            {/* Menu Avatar */}
            {userType === 1 || userType === 2 ? (
              <>
                <Box>
                  <MenuAvatar userType={userType}/>
                </Box>
              </>
            ) : null}

            {/* Inicio de Sesión - Registro */}
            {userType === 0 ? (
              <SingInButtons themeMode={themeMode} />
            ) : null}
          </div>          
        </div>
      </AppBar>
    </>
  );
}
