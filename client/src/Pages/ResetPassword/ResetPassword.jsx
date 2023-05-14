import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./ResetPassword.module.css";

export default function ResetPassword() {
    const [user, setUser] = useState({
        email: "",
    })

    const handleSubmit = async(event) => {
        event.preventDefault();
        console.log(user)
        setUser({
            email: "", 
        })
    }

    //Detecta cambios de los input input
    const handleInput = (event) => {
        const { name, value } = event.target;
        setUser({
            ...user,
            [name]: value
        });
    }

  return (
    <div className={styles.container}>
        <h3 className={styles.title}>
            Cambiar Contraseña
        </h3>
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
            <button className={styles.button}  type="submit">
                <span className={styles.button_text}>Cambiar Contraseña</span>
            </button>
        </form>

        <div className={styles.subContainer}>
            <NavLink 
                style={{ textDecoration: 'none'}}
                to={"/Login"}
            >
                <p className={styles.textLegend}>Iniciar Sesión</p>
            </NavLink>
            <NavLink 
                style={{ textDecoration: 'none'}}
                to={"/SignupUsuario"}
            >
                <p className={styles.textLegend}>Registrarse</p>
            </NavLink>
        </div>
    </div>
  )
}
