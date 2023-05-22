import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { validationSign } from "./validations";
import { Alert, Snackbar }from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import LoginToBackendOwnAccess from "../LoginToBackendOwnAccess/LoginToBackendOwnAccess";
import styles from "./FormLogin.module.css";

export const LOGIN_USER = "LOGIN_USER"

export default function FormLogin({ userType }) {
  console.log("control en FormLogin");
  //const dispatch = useDispatch();
  const [user, setUser] = useState({
    userType: "",
    password: "",
    email: "",
  });
  const [errors, setErrors] = useState({ 
    password: "",
    email: "",
  });
  const [isAlert, setIsAlert] = useState(false); 
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(user);

    //se envían datos para validación por servidor
    LoginToBackendOwnAccess(user, userType);
    //setIsAlert(true)
    setUser({
      password: "",
      email: "", 
    })
    setTimeout(() => {
        navigate("/")
    }, "1000");

  };
  //Detecta cambios de los input input
  const handleInput = (event) => {
    const { name, value } = event.target;
    console.log(event.target.value);
    setUser({
      ...user,
      userType,
      [name]: value,
    });
    setErrors(
      validationSign({
        ...user,
        [name]: value 
      })
  )

  };
  return (
    <>
       {isAlert && (<Snackbar open={isAlert} autoHideDuration={2000} onClose={()=>setIsAlert(false)}>
            <Alert 
                variant="filled" severity="success"
            >
              Inicio de Sesión Satisfactorio
            </Alert>
        </Snackbar>)}
      <form className={styles.form} onSubmit={handleSubmit}>
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
        <div>
          <input
            type="password"
            placeholder="Contraseña"
            name="password"
            value={user.password}
            onChange={handleInput}
            className={styles.input}
          />
          {errors.password && 
          <p className={styles.errorPass}>
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
          <NavLink style={{ textDecoration: "none" }} to={"/ResetPassword"}>
            <p className={styles.textLegend}>Olvide mi contraseña</p>
          </NavLink>
        </div>
        {Object.entries(errors).length === 0 ?
            <button className={styles.button}  type="submit">
                <span className={styles.button_text}>Iniciar Sesión</span>
            </button>
            : <button className={styles.buttonOff} disabled>
                <span className={styles.button_text}>Iniciar Sesión</span>
            </button>
        }    
      </form>
    </>
  );
}