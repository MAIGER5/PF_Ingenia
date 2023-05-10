import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { ColorModeContext } from "../Layout";
import { useTheme } from "@emotion/react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function NavBar() {
  let estadoUsuario = 1;

  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const buttonColor = theme.palette.mode === "light" ? "black" : "white";

  //↓↓↓↓↓ NavBar ↓↓↓↓↓
  const [searchString, setSearchString] = useState("");

  function handleChange(event) {
    event.preventDefault();
    setSearchString(event.target.value);
    console.log(searchString);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(`Cadena de búsqueda: ${searchString}`);
    //dispatch(getByName(searchString)); // envío el string a la función de búsqueda;
   
  }
  //↑↑↑↑↑ NavBar ↑↑↑↑↑

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "background.default" }}>
        <Toolbar
          sx={{
            display: "flex",
            flexGrow: 1,
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5">Ingenia</Typography>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",

              color: "text.primary",
              borderRadius: 1,
              p: 0,
            }}
          >
            <form onChange={handleChange}>
              <TextField
                id="search"
                label="Buscar"
                type="search"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      position="start"
                      sx={{ borderRadius: "40px", height: "100%" }}
                    >
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{ height: "100%" }}
                onKeyPress={(event) => {
                    if (event.key === "Enter") {
                      handleSubmit(event);
                    }
                  }}
              />
            </form>
          </Box>

          {estadoUsuario === 1 ? (
            <>
              <Link
                href="#"
                sx={{
                  whiteSpace: "nowrap",
                }}
              >
                Mis Cursos
              </Link>

              <Box>
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="label"
                >
                  {/* <input hidden accept="image/*" type="file" /> */}
                  <NotificationsIcon />
                </IconButton>
              </Box>

              <Box>
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="label"
                >
                  {/* <input hidden accept="image/*" type="file" /> */}
                  <ShoppingCartIcon />
                </IconButton>
              </Box>
            </>
          ) : null}

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
            {/* {theme.palette.mode} mode */}
            <IconButton
              sx={{ ml: 1 }}
              onClick={colorMode.toggleColorMode}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </Box>

          {estadoUsuario === 1 ? (
            <>
              <Box>
                <Avatar sx={{ width: 45, height: 45 }}>
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="label"
                  >
                    <AccountCircleIcon sx={{ width: 45, height: 45 }} />
                  </IconButton>
                </Avatar>
              </Box>
            </>
          ) : null}

          {estadoUsuario === 0 ? (
            <>
              <Button
                color="primary"
                variant="outlined"
                sx={{
                  whiteSpace: "nowrap",
                  mr: 2,
                  color: buttonColor,
                  fontWeight: "bold",
                  er: "5px solid",
                  padding: "8px 50px",
                  margin: "0 20px",
                }}
              >
                Iniciar Sesión
              </Button>
              <Button
                color="primary"
                variant="contained"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  padding: "8px 50px",
                  margin: "0 20px",
                }}
              >
                {" "}
                Registrarse
              </Button>
            </>
          ) : null}
        </Toolbar>
      </AppBar>
    </>
  );
}
