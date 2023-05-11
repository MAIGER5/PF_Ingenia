import { NavLink } from "react-router-dom"
import FormRegisterUsuario from "../../components/FormRegister/FormRegisterUsuario"

import styles from "./SignupUsuario.module.css"

export default function SignupUsuario() {
  return (
    <div className={styles.container}>
      <p className={styles.title}> Registrate y comienza</p>
      <FormRegisterUsuario />

      <p className={styles.disclaimer}>
        Al registrarte, aceptas nuestras Condiciones de uso y nuestra Política de privacidad.
      </p>
      <p className={styles.textBottom}>
        ¿Ya tienes una cuenta?
        <NavLink to={"/Login"}>
          <span className={styles.textLink}> Inicia Sesión</span>
        </NavLink>
      </p>
    </div>
  )
}


