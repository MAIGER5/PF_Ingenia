import { NavLink } from "react-router-dom"
import FormRegisterUsuario from "../../components/FormRegister/FormRegisterUsuario"

import styles from "./SignupUsuario.module.css"

export default function SignupUsuario() {
  return (
    <div className={styles.container}>
      <p className={styles.title}> Registrate y comienza</p>
      <div>
        <FormRegisterUsuario />

        <p className={styles.disclaimer}>
          Al registrarte, 
          <NavLink 
            to={"/Terms"} 
            style={{ textDecoration: 'none' }}
          >
            <span className={styles.textLink}> condiciones de uso y nuestra Política de privacidad.</span>
          </NavLink> 
        </p>
      </div>
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


