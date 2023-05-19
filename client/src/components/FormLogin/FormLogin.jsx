import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./FormLogin.module.css";
import { useDispatch } from "react-redux";
import LoginToBackendOwnAccess from "../LoginToBackendOwnAccess/LoginToBackendOwnAccess";

export const LOGIN_USER = "LOGIN_USER"

export default function FormLogin({ userType }) {
  console.log("control en FormLogin");
  //const dispatch = useDispatch();

  const [user, setUser] = useState({
    userType: "",
    password: "",
    email: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(user);

    //se envían datos para validación por servidor
    LoginToBackendOwnAccess(user, userType);
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
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
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
        <NavLink style={{ textDecoration: "none" }} to={"/ResetPassword"}>
          <p className={styles.textLegend}>Olvide mi contraseña</p>
        </NavLink>
      </div>
      <button className={styles.button} type="submit">
        <span className={styles.button_text}>Iniciar Sesión</span>
      </button>
    </form>
  );
}
