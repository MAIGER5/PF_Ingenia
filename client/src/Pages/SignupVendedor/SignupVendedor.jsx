import { NavLink } from "react-router-dom"
import FormRegisterVendedor from "../../components/FormRegister/FormRegisterVendedor"

import styles from "./SignupVendedor.module.css"

export default function SignupVendedor() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Registrate y comienza inspirar a otros</p>
      <div className={styles.subContainer}>
        <FormRegisterVendedor />
        <p className={styles.disclaimer}>
          Al registrarte, aceptas nuestras Condiciones de uso y nuestra Política de privacidad.
        </p>
      </div>
      <p className={styles.textBottom}>
        ¿Ya tienes una cuenta?
        <NavLink to={"/Login"}>
          <span className={styles.textLink}> Inicia Sesión</span>
        </NavLink>
      </p>
    </div>
  )
}
