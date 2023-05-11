import styles from "./FormRegisterVendedor.module.css";

export default function FormRegisterVendedor() {
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
          <input 
            type="text" 
            placeholder="¿Cuentas con algún estudio en tu especialidad?"
            className={styles.input}
        />
        <input 
            type="text" 
            placeholder="Presentate con el mundo, describe lo que haces"
            className={styles.input}
        />

        <button className={styles.button}  type="submit">
            <span className={styles.button_text}>Registrate</span>
        </button>
    </form>
  )
}
