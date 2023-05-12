import { useState } from "react";
import { NavLink } from "react-router-dom";
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

    //Detecta cambios de los input input
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
        <div>
            <input 
                type="password" 
                placeholder="Contraseña"
                name="password"
                value={user.password}
                onChange={handleInput}
                className={styles.input}
            />
            <NavLink 
                activeStyle={{color: "#E53170"}}
                style={{ textDecoration: 'none' }}
                to={"/ForgotPassword"}
            >
                <p className={styles.textLegend}>Olvide mi contraseña</p>
            </NavLink>
        </div>
        <button className={styles.button}  type="submit">
            <span className={styles.button_text}>Iniciar Sesión</span>
        </button>
    </form>
    
  )
}
