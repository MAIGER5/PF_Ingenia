import { NavLink, useNavigate } from "react-router-dom"
import FormRegisterVendedor from "../../components/FormRegister/FormRegisterVendedor"
import { GoogleAuthProvider, signInWithPopup,} from "firebase/auth";
import { auth } from "../../firebase/config";
import signupGoogle from "../SignupUsuario/signupGoogle";


import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import styles from "./SignupVendedor.module.css"

export default function SignupVendedor() {

  const navigate = useNavigate();

  const provider = new GoogleAuthProvider();

  const signInGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      //const user = result.user;
      signupGoogle(result, "SignupVendedor")
      console.log("success")
      navigate("/")
    }).catch((error) => {
      console.log(error.message)
    });
  }


  return (
    <div className={styles.container}>
      <p className={styles.title}>Registrate y comienza inspirar a otros</p>
      <div className={styles.subContainer}>
        <FormRegisterVendedor />
        <p className={styles.disclaimer}>
          Al registrarte, aceptas nuestras 
          <NavLink 
            to={"/Terms"} 
            style={{ textDecoration: 'none' }}
          >
            <span className={styles.textLink}> condiciones de uso y nuestra Política de privacidad.</span>
          </NavLink>   
        </p>
      </div>
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
          onClick={signInGoogle}
      >
          Continuar con Google
      </Button>

      <p className={styles.textBottom}>
        ¿Ya tienes una cuenta?
        <NavLink 
          to={"/Login"}
          style={{ textDecoration: 'none' }}
        >
          <span className={styles.textLink}> Inicia Sesión</span>
        </NavLink>
      </p>
    </div>
  )
}
