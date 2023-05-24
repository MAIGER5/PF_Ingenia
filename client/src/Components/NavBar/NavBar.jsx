import React, {useEffect} from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
//material UI
import {
  AppBar,
  Box,
  IconButton,
  Typography,
  Badge,
  Tooltip
} from "@mui/material";
import { useTheme } from "@emotion/react";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from '@mui/icons-material/Favorite';
//componente
import { ColorModeContext } from "../Layout";
import MenuAvatar from "./MenuAvatar";
import SearchBar from "./SearchBar";
import SingInButtons from "./SingInButtons";
//actions
import { getCourses } from "../../Redux/Actions/getCourses";
import { getCategories } from "../../Redux/Actions/getCategories";
import { postLocalStorage } from "../../Redux/Actions/actionsCarrito/postLocalStorage";


export default function NavBar() {

  // Suscribo al estado global:
      const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getCourses());
    dispatch(getCategories());
    dispatch(postLocalStorage())
  }, [dispatch])


  //Badge para el cart desde el navbar
      const cart = useSelector((state)=> state.allCarrito)
      const cartCourses = cart.length

  // userType de localStorage que se dejó de usar:
      //let loginUser = { type: 0 };
      //let userType = 0;

      //prevengo un dato "loginUser.userType = null"
      //if (localStorage.getItem("userType") == null) {
      //  localStorage.setItem("userType", "0");
      //}

      // Consulto qué tipo de usuario está registrado
      //if (localStorage.getItem("userType") != 0) {
      //  userType = parseInt(localStorage.getItem("userType"), 10);
      //} */

  // Modo Dark/Ligth
      const theme = useTheme();
      const colorMode = React.useContext(ColorModeContext);
      const themeMode = theme.palette.mode === "light" ? "black" : "white";

  return (
    <div>
      <AppBar position="static" elevation={0} sx={{ bgcolor: "background.default" }} >
        <div style={{ display: "flex", flexGrow: 1, justifyContent: "space-between", margin: "30px 30px 25px 0", }} >

          {/* Logo ingenia */}
              <Link to = {"/"} style={{ textDecoration: 'none' }} >
              <Typography variant   = "h5" color={'primary'} sx={{ fontSize: "36px", fontWeight: "700", marginLeft: "40px" }} >
              Ingenia
              </Typography>
              </Link>

          {/* SearchBar */}
              <SearchBar />

          <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "20px", width: "560px", position: "relative", }} >

              {/* Publicaciones */}
                  <div>
                  {userType == 2 ? (
                  <NavLink style={{ textDecoration: "none", color: "#FF8906", fontSize: "20px", }} to={"/postCourse"} >
                  <p>Publicaciones</p>
                  </NavLink>
                  ) : null}
                  </div>

              {/* Artículos */}
              <div>
                {userType == 2 ? (
                  <NavLink
                  style={{
                    textDecoration: "none",
                    color: "#FF8906",
                    fontSize: "20px",
                  }}
                  to={"/PostArticle"}
                  >
                  <p>Artículos</p>
                  </NavLink>
                  ) : null}
                  </div>

              {/* Mis Cursos - Favoritos */}
                   <div> {userType === 1 ? (
                       <div style={{ display: "flex", alignItems: "center", gap: "10px", }} >

                         {/* Mis Cursos */}
                             <NavLink style={{ textDecoration: "none", color: "#FF8906", fontSize: "20px", }} to={"/MyCourses"} >
                             <p>Mis cursos</p>
                             </NavLink>

                         {/* Favoritos */}
                             <Box> <NavLink to={"/MyCourses"}>
                             <IconButton color="primary" aria-label="upload picture" component="label" >
                             <Tooltip title="Favoritos" placement="top">
                             <FavoriteIcon />
                             </Tooltip>
                             </IconButton>
                             </NavLink> </Box>
                       </div> ) : null}
                   </div>


              {/* Notificaciones */}
                  <div> {userType === 1 || userType === 2 ? (
                  <div> <Box> <NavLink to={"/Notifications"}>
                  <IconButton color="primary" aria-label="upload picture" component="label" >
                  <Tooltip title="Notificaciones" placement="top">
                  <NotificationsIcon />
                  </Tooltip>
                  </IconButton>
                  </NavLink> </Box> </div>
                  ) : null} </div>


              {/* Carrito - Modo Dark/Ligth */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", }} >
                  {/* Carrito */}
                      {userType == 1 || userType == 0 ? (<Box> <NavLink to="/Carrito">
                      <IconButton color="primary" aria-label="upload picture" component="label" >
                      {/* <input hidden accept="image/*" type="file" /> */}
                      <Badge badgeContent={cartCourses} color="secondary">
                      <Tooltip title="Carrito" placement="top">
                      <ShoppingCartIcon />
                      </Tooltip>
                      </Badge>
                      </IconButton>
                      </NavLink> </Box>) : null}

                  {/* Mode Dark/Ligth */}
                      <Box sx={{ justifyContent: "center", color: "text.primary"}}>
                      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit" >
                      <Tooltip title="Dark / Ligth" placement="top">
                      <div>
                      {theme.palette.mode === "dark" ? ( <DarkModeIcon color="primary" /> ) : ( <LightModeIcon color="primary" /> )}
                      </div>
                      </Tooltip>
                      </IconButton>
                      </Box>
                  </div>

              {/* Menu Avatar */}
                  <div> {userType === 1 || userType === 2 ? (
                  <> <Box> <MenuAvatar userType={userType}/> </Box> </>
                  ) : null} </div>

              {/* Inicio de Sesión - Registro */}
                  {userType === 0 ? (<SingInButtons themeMode={themeMode} />) : null}

          </div>
        </div>
      </AppBar>
    </div>
  );
}
