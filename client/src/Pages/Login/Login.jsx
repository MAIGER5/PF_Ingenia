import { useState  } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup,} from "firebase/auth";
import { auth } from "../../firebase/config";
import FormLogin from "../../Components/FormLogin/FormLogin";

import GoogleIcon from "@mui/icons-material/Google";
import { Box, Tab, Tabs, Button } from "@mui/material";
import styles from "./Login.module.css";
import LoginToBackendGoogle from "../../Components/LoginToBackendGoogle/LoginToBackendGoogle";
import { useDispatch } from "react-redux";

export const LOGIN_USER = "LOGIN_USER"

export default function Login() {
  const [tabIndex, setTabIndex] = useState(0);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  //Provider de Google
  const provider = new GoogleAuthProvider();

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  //Iniciar sesión con Google
  const signInGoogle = (type) => {
    signInWithPopup(auth, provider)
    .then(async (result) => {
      //se envían datos para validación por servidor
      LoginToBackendGoogle(result, type, dispatch)

      //navigate("/");
      window.location.href = "/";

    }).catch((error) => {
      console.log(error.message)
    });
  }

  const loginBottom = (type) => {
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
          onClick={() => signInGoogle(type)}
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
              <FormLogin userType="SignupUsuario"/>
              {loginBottom("SignupUsuario")}
            </Box>
          )}
          {tabIndex === 1 && (
            <Box>
              <FormLogin userType="SignupVendedor"/>
              {loginBottom("SignupVendedor")}
            </Box>
          )}
        </Box>
      </Box>
    </div>
  );
}
