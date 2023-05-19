import { useState } from "react";
import styles from "./FormRegisterUsuario.module.css"
import { useDispatch } from "react-redux";
import { postRegisterUser } from "../../Redux/Actions/postRegisterUser";

export default function FormRegisterUsuario() {

    const dispatch = useDispatch();
    
    const [user, setUser] = useState({
        name: "",
        lastname: "",
        password: "",
        email: "",
    })
    
    
    const handleInput = (event) => {
        const property = event.target.name;
        const value = event.target.value
    
        setUser({...user, [property]: value})
    }
    

    const handleSubmit = (event) => {
        dispatch(postRegisterUser(user));
    
        setUser({
            name: "",
            lastname: "",
            password: "",
            email: "", 
        });
    }
    

    return (
        <form 
            onSubmit={(event)=> handleSubmit()} 
            className={styles.form}
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
                type="text" 
                placeholder="Apellido"
                name="lastname"
                value={user.lastname}
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
            <button type="submit" className={styles.button}>
                <span className={styles.button_text}>Registrate</span>
            </button>
        </form>
    );
};
