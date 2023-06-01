import AvatarComponent from '../../Components/AvatarComponent/AvatarComponent';
import { ListItemButton, ListItemText, Divider } from '@mui/material';
import styles from "./ProfileVendedor.module.css";
import { useState } from 'react';
import DatosVendedor from './DatosVendedor';
import MiPerfil from './MiPerfil';
import MisCUrsos from './MisCUrsos';
import MisArticulos from './MisArticulos';
import { useSelector } from 'react-redux';

export default function ProfileVendedor() {
    const [selectedComponent, setSelectedComponent] = useState("datos");
    const usuer=useSelector(state=>state.usercrud)
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
                    {usuer.data?.name} {usuer.data?.lastname}  
                    </h3>
                </div>
                <div className={styles.optionsContainer}>
                    <Divider />
                    <ListItemButton onClick={() => handleClick('datos')} >
                        <ListItemText primary="Mis datos" />
                    </ListItemButton>
                 
                    <Divider />
                    <ListItemButton onClick={() => handleClick('cursos')}>
                        <ListItemText primary="Mis cursos" />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton onClick={() => handleClick('miperfil')}>
                        <ListItemText primary="Mi perfil" />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton onClick={() => handleClick('misarticulos')}>
                        <ListItemText primary="Mis articulos" />
                    </ListItemButton>
                    <Divider />
                </div>
            </div>
            {selectedComponent === 'datos' && < DatosVendedor/>}
           
            {selectedComponent === 'miperfil' && <MiPerfil/>}
            {selectedComponent === 'cursos' && <MisCUrsos />}
            {selectedComponent === 'misarticulos' && <MisArticulos/>}

        </div>
    )
}