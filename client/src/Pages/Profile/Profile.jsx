import AvatarComponent from '../../Components/AvatarComponent/AvatarComponent';
import { ListItemButton, ListItemText, Divider } from '@mui/material';
import styles from "./Profile.module.css";
import Datos from './Datos';
import MisCompras from './MisCompras';
import MetodoDePago from './MetodoDePago';
import {  useState } from 'react';
import LogoutComponent from '../../Components/LogoutComponent/LogoutCoponent';
import { useSelector } from 'react-redux';




export default function Profile() {
    const [selectedComponent, setSelectedComponent] = useState("datos");
    const [openModal, setOpenModal] = useState(false);
    const usuer=useSelector(state=>state.usercrud)
   
    
    const handleClick = (component) => {
        setSelectedComponent(component);
    };
    const handleclosesecion=()=>{
        setOpenModal(true);
    }

 
    return (
        <div className={styles.container}>
            <div className={styles.subContainer}>
                <div className={styles.user}>
                    <AvatarComponent
                        name={usuer?.data.name}
                        width={"90px"}
                        height={"90px"}
                        fontSize={"45px"}
                    />
                    <h3 className={styles.userText}>
                    {usuer?.data.name} {usuer?.data.lastname}
                    </h3>
                </div>
                <div className={styles.optionsContainer}>
                    <Divider />
                    <ListItemButton onClick={() => handleClick('datos')} >
                        <ListItemText primary="Mis datos" />
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
                    <ListItemButton onClick={() =>handleclosesecion()}>
                        <ListItemText primary="Cerrar Sesión" />
                    </ListItemButton>
                    <Divider />
                    {openModal && <LogoutComponent onClose={() => setOpenModal(false)} />}
                </div>
            </div>
            <div className={styles.subView}>
            {selectedComponent === 'datos' && <Datos />}
            {selectedComponent === 'compras' && <MisCompras />}
            {selectedComponent === 'metodoPago' && <MetodoDePago />}
            </div>
        </div>
    )
}