import AvatarComponent from '../../Components/AvatarComponent/AvatarComponent';
import { ListItemButton, ListItemText, Divider } from '@mui/material';
import styles from "./Profile.module.css";
import Datos from './Datos';
import ImagenDePerfil from './ImagenDePerfil';
import MisCompras from './MisCompras';
import MetodoDePago from './MetodoDePago';
import { useState } from 'react';

export default function Profile() {
    const [selectedComponent, setSelectedComponent] = useState("datos");

    const handleClick = (component) => {
        setSelectedComponent(component);
    };


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
                    <ListItemButton onClick={() => handleClick('datos')} >
                        <ListItemText primary="Mis datos" />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton onClick={() => handleClick('imagen')}>
                        <ListItemText primary="Imagen de Perfil" />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton onClick={() => handleClick('compras')}>
                        <ListItemText primary="Mis compras" />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton onClick={() => handleClick('metodoPago')}>
                        <ListItemText primary="Métodos de pago" />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton onClick={() => handleClick('cerrarSesion')}>
                        <ListItemText primary="Cerrar Sesión" />
                    </ListItemButton>
                    <Divider />
                </div>
            </div>
            <div className={styles.subView}>
            {selectedComponent === 'datos' && <Datos />}
            {selectedComponent === 'imagen' && <ImagenDePerfil />}
            {selectedComponent === 'compras' && <MisCompras />}
            {selectedComponent === 'metodoPago' && <MetodoDePago />}
            </div>
        </div>
    )
}