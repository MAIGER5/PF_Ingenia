import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validationVendor } from "./validations";
import LoaderPage from "../LoaderPage/LoaderPage";
import RegisterVendorToBackend from "./RegisterVendorToBackend";
import { Alert, Snackbar }from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import styles from "./FormRegisterVendedor.module.css";


export default function FormRegisterVendedor() {

    const [user, setUser] = useState({
        name: "",
        lastname: "",
        password: "",
        email: "",
        description: "",
        studies: "",
    })

    const [errors, setErrors] = useState({ 
        name: "",
        lastname: "",
        password: "",
        email: "",
        description: "",
        studies: "",
    });
    const [isLoading, setisLoading] = useState(false);
    const [isAlert, setIsAlert] = useState(false); 
    const [isAlertError, setIsAlertError] = useState(false) 

    const navigate = useNavigate();
    
    const handleSubmit = async(event) => {
        event.preventDefault();

        RegisterVendorToBackend(user)
     
        setUser({
            name: "",
            lastname: "",
            password: "",
            email: "", 
            description: "",
            studies: "",
        })
    }

    const handleInput = (event) => {
        const { name, value } = event.target;

        setUser({
            ...user,
            [name]: value
        });
        setErrors(
            validationVendor({
              ...user,
              [name]: value 
            })
        )
    }
    
  return (
    <>
        {isLoading && <LoaderPage/>}
        {isAlert && (<Snackbar open={isAlert} autoHideDuration={2000} onClose={()=>setIsAlert(false)}>
            <Alert 
                variant="filled" severity="success"
            >
                Registrado Satisfactoriamente
            </Alert>
        </Snackbar>)}
        <form 
        className={styles.form}
        onSubmit={handleSubmit}
        >
        <div className={styles.container}>
            <div className={styles.containerMedium} >
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
                    placeholder="apellido"
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
            </div>
            <div className={styles.containerLarge} >
                <textarea
                    placeholder="Cuéntanos sobre los estudios o especialidades con las que cuentas"
                    name="studies"
                    value={user.studies}
                    onChange={handleInput}
                    className={styles.textareaMedium}
                />
                {errors.studies &&
                    <p className={styles.error}>
                    <ErrorOutlineIcon
                        sx={{ 
                            width: "15px",
                            marginRight: "5px",
                            marginBottom: "-7px" 
                        }}
                    />
                    {errors.studies}
                    </p>
                }
                <textarea 
                    placeholder="Presentate con el mundo, describe lo que haces"
                    name="description"
                    value={user.description}
                    onChange={handleInput}
                    className={styles.textareaLarge}
                />
                {errors.description &&
                    <p className={styles.error}>
                    <ErrorOutlineIcon
                        sx={{ 
                            width: "15px",
                            marginRight: "5px",
                            marginBottom: "-7px" 
                        }}
                    />
                    {errors.description}
                    </p>
                }
            </div>
        </div>
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
  )
}
