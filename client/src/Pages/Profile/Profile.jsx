import AvatarComponent from '../../Components/AvatarComponent/AvatarComponent';
import { ListItemButton, ListItemText, Divider } from '@mui/material';
import styles from "./Profile.module.css";

export default function Profile() {

    const onClick = () => {
        console.log("click")
    }

  return (
    <div className={styles.container}>
        <div className={styles.subContainer}>
            <div className={styles.user}>
                <AvatarComponent  
                    name={"Luis Felipe"} 
                    width={"90px"} 
                    height={"90px"}
                    fontSize={"45px"}
                />
                <h3 className={styles.userText}>
                    Felipe Garcia
                </h3>
            </div>
            <div className={styles.optionsContainer}>
                <Divider />
                <ListItemButton onClick={onClick}>
                    <ListItemText primary="Mis datos" />
                </ListItemButton>
                <Divider />
                <ListItemButton>
                    <ListItemText primary="Imagen de Perfil" />
                </ListItemButton>
                <Divider />
                <ListItemButton>
                    <ListItemText primary="Mis compras" />
                </ListItemButton>
                <Divider />
                <ListItemButton>
                    <ListItemText primary="Métodos de pago" />
                </ListItemButton>
                <Divider />
                <ListItemButton>
                    <ListItemText primary="Cerrar Sesión" />
                </ListItemButton>
                <Divider />
            </div>
        </div>
        <div className={styles.form}>
            <h3>Working on this page</h3>
        </div>
    </div>
  )
}