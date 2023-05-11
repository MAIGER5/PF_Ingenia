import styles from "./FormLogin.module.css";


export default function FormLogin() {
  return (
    <form className={styles.form}>
        <input 
            type="text" 
            placeholder="Correo Electrónico"
            className={styles.input}
        />
        <input 
            type="text" 
            placeholder="Contraseña"
            className={styles.input}
        />
        <button className={styles.button}  type="submit">
            <span className={styles.button_text}>Iniciar Sesión</span>
        </button>
    </form>
    
  )
}
