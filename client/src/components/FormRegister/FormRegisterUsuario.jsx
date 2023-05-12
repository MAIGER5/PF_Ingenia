import { useState } from "react";
import styles from "./FormRegisterUsuario.module.css"

export default function FormRegisterUsuario() {

    const [user, setUser] = useState({
        name: "",
        lastName: "",
        password: "",
        email: "",
    })

    const handleSubmit = async(event) => {
        event.preventDefault();


        console.log(user)
     
        // await fetch("http://localhost:3001/user/created", {
        // method: "POST",
        // headers: {
        //   "Content-Type": "application/json",
        // },
        // body: JSON.stringify(user),
        // }).catch(error => {
        //     console.log(error);
        // });
        setUser({
            name: "",
            lastName: "",
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
            type="text" 
            placeholder="Nombre"
            name="name"
            value={user.name}
            onChange={handleInput}
            className={styles.input}
        />
        <input 
            type="Apellido" 
            placeholder="Apellido"
            name="lastName"
            value={user.lastName}
            onChange={handleInput}
            className={styles.input}
        />
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
        <button className={styles.button} type="submit">
            <span className={styles.button_text}>Registrate</span>
        </button>
    </form>
  )
}
