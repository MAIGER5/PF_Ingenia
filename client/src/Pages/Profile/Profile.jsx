import { Avatar, ListItemButton, ListItemText, Divider } from '@mui/material';
import styles from "./Profile.module.css";

export default function Profile() {

    //TODO revisar la creación del componente avatar
    function stringToColor(string) {
        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */

        return color;
    }


    function stringAvatar(name) {
        return {
            sx: {
            bgcolor: stringToColor(name),
            height: '90px', 
            width: '90px',
            fontSize: "45px",
            marginLeft: "15px",
            },
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }

    const onClick = () => {
        console.log("click")
    }

  return (
    <div className={styles.container}>
        <div className={styles.subContainer}>
            <div className={styles.user}>
                <Avatar {...stringAvatar('Felipe Garcia')} />
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