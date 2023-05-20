import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoaderPage from "../LoaderPage/LoaderPage";
import { Alert, Snackbar }from '@mui/material';
import styles from "./FormRegisterVendedor.module.css";

export default function FormRegisterVendedor() {

    const [user, setUser] = useState({
        name: "",
        lastName: "",
        password: "",
        email: "",
        description: "",
        studies: "",
    })
    const [isLoading, setisLoading] = useState(false);
    const [isAlert, setIsAlert] = useState(false);  

    const navigate = useNavigate();
    
    const handleSubmit = async(event) => {
        event.preventDefault();

        
      
        console.log(user)
        setIsAlert(true)
   
        await fetch("http://localhost:3001/instructor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
        }).catch(error => {
            console.log(error);
        });
        setTimeout(() => {
            setisLoading(true);
            navigate("/")
        }, "1000");
        setisLoading(false)
        setUser({
            name: "",
            lastName: "",
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
                <input 
                    type="text" 
                    placeholder="Contraseña"
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
            </div>
            <div className={styles.containerLarge} >
                <textarea
                    placeholder="¿Cuentas con algún estudio en tu especialidad?"
                    name="studies"
                    value={user.studies}
                    onChange={handleInput}
                    className={styles.textareaMedium}
                />
                <textarea 
                    placeholder="Presentate con el mundo, describe lo que haces"
                    name="description"
                    value={user.description}
                    onChange={handleInput}
                    className={styles.textareaLarge}
                />
            </div>
        </div>      
        <button className={styles.button}  type="submit">
            <span className={styles.button_text}>Registrate</span>
        </button>
    </form>



    </>
   
  )
}
