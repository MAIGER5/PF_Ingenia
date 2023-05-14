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
          Al registrarte, aceptas nuestras 
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
