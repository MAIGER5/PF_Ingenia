import { useState } from "react";
import { NavLink } from "react-router-dom";

import FormLogin from "../../components/FormLogin/FormLogin";

import GoogleIcon from "@mui/icons-material/Google";
import { Box, Tab, Tabs, Typography, Button } from "@mui/material";

import styles from "./Login.module.css";

export default function Login() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  const loginBottom = (type) => {
    return ( 
      <div className={styles.containerBottom}>
        <div>
          <span></span>
          <span>o</span>
          <span></span>
        </div>
        <Button
          variant="outlined"
          color="secondary"
          startIcon={<GoogleIcon />}
          sx={{ width: "280px" }}
        >
          Continuar con Google
        </Button>
        <p className={styles.textBottom}>
          ¿Aún no tienes una cuenta?
          <NavLink to={`/${type}`}>
            <span className={styles.textLink}> Registrate</span>
          </NavLink>
        </p>
      </div>
    )
  }


  //TODO agregar texto diferenciador tabs
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        Inicia sesión en tu cuenta Ingenia
      </p>
      <Box>
        <Tabs 
          value={tabIndex} 
          onChange={handleTabChange}
          centered
        >
          <Tab label="Usuario" />
          <Tab label="Vendedor" />
        </Tabs>
        <Box sx={{ padding: 2 }}>
          {tabIndex === 0 && (
            <Box>
        
              <Typography>Usuario</Typography>
              <FormLogin />
              {loginBottom("SignupUsuario")}
            </Box>
          )}
          {tabIndex === 1 && (
            <Box>
              <Typography>Vendedor</Typography>
              <FormLogin />
              {loginBottom("SignupVendedor")}
            </Box>
          )}
        </Box>
      </Box>
    </div>
  );
}
