import styles from "./FormRegisterUsuario.module.css"

export default function FormRegisterUsuario() {
  return (
    <form className={styles.form}>
        <input 
            type="text" 
            placeholder="Nombre"
            className={styles.input}
        />
        <input 
            type="Apellido" 
            placeholder="Contraseña"
            className={styles.input}
        />
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
            <span className={styles.button_text}>Registrate</span>
        </button>
    </form>
  )
}
