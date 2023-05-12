import {
  AppBar,
  Box,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import { ColorModeContext } from "../Layout";
import { useTheme } from "@emotion/react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React, { useState } from "react";
import MenuAvatar from "./MenuAvatar";
import SearchBar from "./SearchBar";
import SingInButtons from "./SingInButtons";

export default function NavBar() {
  let estadoUsuario = 1;
  /* variable auxiliar temporal:
    0 => usuario no registrado
    1 => coprador
    2 => vendedor
    4 => administrador */

  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const themeMode = theme.palette.mode === "light" ? "black" : "white";

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
          <Link href="/" underline="none">
            <Typography variant="h5">Ingenia</Typography>
          </Link>

          <Box
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              height: "50px",
              color: "text.primary",
              borderRadius: "60px",
              p: 0,
            }}
          >
            <SearchBar />
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
                <MenuAvatar />
              </Box>
            </>
          ) : null}

          {estadoUsuario === 0 ? <SingInButtons themeMode={themeMode} /> : null}
        </Toolbar>
      </AppBar>
    </>
  );
}
