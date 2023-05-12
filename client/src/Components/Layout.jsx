import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { pink, orange } from "@mui/material/colors";
import { CssBaseline } from "@mui/material";
import Footer from "./Footer/Footer";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export default function Layout(props) {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: orange[600],
          },
          secondary: {
            main: pink[500],
          },
        }, typography: {
          "fontFamily": `"Figtree", sans-serif`,
          button: {
            textTransform: 'none'
          }
        }
      }),
    [mode]
  );

  return (
    <>
      <div>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <header></header>
            <main>{props.children}</main>
            <Footer/>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </div>
    </>
  );
}
