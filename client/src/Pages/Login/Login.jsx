import { useState } from "react";
import { NavLink } from "react-router-dom";

import FormLogin from "../../Components/FormLogin/FormLogin";

import GoogleIcon from "@mui/icons-material/Google";
import { Box, Tab, Tabs, Button } from "@mui/material";

import styles from "./Login.module.css";

export default function Login() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  const loginBottom = (type) => {
    console.log("control en Login");
    return ( 
      <div className={styles.containerBottom}>
        <div className={styles.decoContainer}>
          <hr className={styles.line}/>
          <span className={styles.decoration}>o</span>
          <hr className={styles.line}/>
        </div>
        <Button
          variant="outlined"
          color="secondary"
          startIcon={<GoogleIcon />}
          sx={{ width: "280px", fontSize: "15px" }}
        >
          Continuar con Google
        </Button>
        <p className={styles.textBottom}>
          ¿Aún no tienes una cuenta?
          <NavLink 
            style={{ textDecoration: 'none'}}
            to={`/${type}`}
          >
            <span className={styles.textLink}> Registrate</span>
          </NavLink>
        </p>
      </div>
    )
  }


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
          <Tab 
            label="Usuario" 
            sx={{ fontSize: "16px" }}
          />
          <Tab 
            label="Vendedor" 
            sx={{ fontSize: "16px" }}  
          />
        </Tabs>
        <Box sx={{ padding: 2 }}>
          {tabIndex === 0 && (
            <Box>
              <FormLogin type={1} />
              {loginBottom("SignupUsuario")}
            </Box>
          )}
          {tabIndex === 1 && (
            <Box>
              <FormLogin type={2}/>
              {loginBottom("SignupVendedor")}
            </Box>
          )}
        </Box>
      </Box>
    </div>
  );
}
