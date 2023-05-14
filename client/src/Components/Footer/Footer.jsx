import { NavLink } from 'react-router-dom';
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>  
      <NavLink to={"/"}  style={{ textDecoration: "none"}}>
       <p className={styles.ingeniaText}>Ingenia</p>
      </NavLink>
      <NavLink to={"/AboutUs"} style={{ textDecoration: "none"}}>
       <p className={styles.aboutText}>Acerca de</p>
      </NavLink>
    </footer>
  )
}
