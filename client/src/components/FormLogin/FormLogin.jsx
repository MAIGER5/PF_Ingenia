import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./FormLogin.module.css";
import { useDispatch } from "react-redux";
import LoginToBackendOwnAccess from "../LoginToBackendOwnAccess/LoginToBackendOwnAccess";
import { postLoginUser } from "../../Redux/Actions/postLoginUser";

export const LOGIN_USER = "LOGIN_USER"

export default function FormLogin({ userType }) {
  console.log("control en FormLogin");
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    userType: "",
    password: "",
    email: ""
  });

  const handleInput = (event) => {

    const property = event.target.name;
    const value = event.target.value

    setUser({...user, userType, [property]: value})
  };

  const handleSubmit = (event) => {
    dispatch(postLoginUser(user));

    setUser({
      userType: "",
      password: "",
      email: ""
    });
}




  return (
    <form onSubmit={(event)=> handleSubmit()} className={styles.form}>
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
