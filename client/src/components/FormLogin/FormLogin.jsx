import { useState } from "react";
import styles from "./FormLogin.module.css";


export default function FormLogin() {

  const [user, setUser] = useState({
        password: "",
        email: "",
    })

    const handleSubmit = async(event) => {
        event.preventDefault();


        console.log(user)

        setUser({
            password: "",
            email: "", 
        })
    }

    const handleInput = (event) => {
        const { name, value } = event.target;

        setUser({
            ...user,
            [name]: value
        });
    }

  return (
    <form 
      className={styles.form}
      onSubmit={handleSubmit}
    >
        <input 
            type="email" 
            placeholder="Correo Electrónico"
            name="email"
            value={user.email}
            onChange={handleInput}
            className={styles.input}
        />
        <input 
            type="password" 
            placeholder="Contraseña"
            name="password"
            value={user.password}
            onChange={handleInput}
            className={styles.input}
        />
        <button className={styles.button}  type="submit">
            <span className={styles.button_text}>Iniciar Sesión</span>
        </button>
    </form>
    
  )
}
