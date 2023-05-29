import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { validationClient } from "./validations";
import RegisterUserToBackend from "./RegisterUserToBackend";

import { Alert, Snackbar }from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import styles from "./FormRegisterUsuario.module.css"

export default function FormRegisterUsuario() {

    //const dispatch = useDispatch();
    
    const [user, setUser] = useState({
        name: "",
        lastname: "",
        password: "",
        email: "",
    })
    const [errors, setErrors] = useState({ 
        name: "",
        lastname: "",
        password: "",
        email: "",
    });

    const [isLoading, setisLoading] = useState(false);
    const [isAlert, setIsAlert] = useState(false); 
    const [isAlertError, setIsAlertError] = useState(false) 
    const navigate = useNavigate();
    
    const handleInput = (event) => {
        const { name, value } = event.target;

        setUser({
            ...user,
            [name]: value
        });
        setErrors(
            validationClient({
              ...user,
              [name]: value 
            })
        )
    }
    
    const handleSubmit = async(event) => {
        event.preventDefault();

        RegisterUserToBackend(user)
    
        setUser({
            name: "",
            lastname: "",
            password: "",
            email: "", 
        });
    }
    
    return (
        <>
         {isAlert && (<Snackbar open={isAlert} autoHideDuration={2000} onClose={()=>setIsAlert(false)}>
            <Alert 
                variant="filled" severity="success"
            >
                Registrado Satisfactoriamente
            </Alert>
        </Snackbar>)}
        <form 
            onSubmit={handleSubmit} 
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
            {errors.name && 
                <p className={styles.error}>
                <ErrorOutlineIcon
                    sx={{ 
                        width: "15px",
                        marginRight: "5px",
                        marginBottom: "-7px" 
                    }}
                />
                {errors.name}
                </p>
            }
            <input 
                type="text" 
                placeholder="Apellido"
                name="lastname"
                value={user.lastname}
                onChange={handleInput}
                className={styles.input}
            />
            {errors.lastname && 
                <p className={styles.error}>
                <ErrorOutlineIcon
                    sx={{ 
                        width: "15px",
                        marginRight: "5px",
                        marginBottom: "-7px" 
                    }}
                />
                {errors.lastname}
                </p>
            }
            <input 
                type="email" 
                placeholder="Correo Electrónico"
                name="email"
                value={user.email}
                onChange={handleInput}
                className={styles.input}
            />
            {errors.email && 
                <p className={styles.error}>
                <ErrorOutlineIcon
                    sx={{ 
                        width: "15px",
                        marginRight: "5px",
                        marginBottom: "-7px" 
                    }}
                />
                {errors.email}
            </p>
            }
            <input 
                type="password" 
                placeholder="Contraseña"
                name="password"
                value={user.password}
                onChange={handleInput}
                className={styles.input}
            />
            {errors.password && 
                <p className={styles.error}>
                <ErrorOutlineIcon
                    sx={{ 
                        width: "15px",
                        marginRight: "5px",
                        marginBottom: "-7px" 
                    }}
                />
                {errors.password}
            </p>
            }
            {Object.entries(errors).length === 0 ?
            <button className={styles.button}  type="submit">
                <span className={styles.button_text}>Registrate</span>
            </button>
            : <button className={styles.buttonOff} disabled>
                <span className={styles.button_text}>Registrate</span>
            </button>
            }  
        </form>
        </>
    );
}
