import React, { useState } from 'react'
import styles from "./Profile.module.css";
import EditIcon from '@mui/icons-material/Edit';
import {  TextField, Stack, Button } from '@mui/material';
import { useSelector } from 'react-redux';
export default function Datos() {
    const usuer=useSelector(state=>state.usercrud)
   
    const[informacion,setinformacio]= useState({
       idUser:usuer.data?.idUser,
        name:"",
        lastname:"",
        password:""
    })
    console.log(informacion)
   
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setinformacio({ ...informacion, [name]: value });
      };
      
    const Cambiodedatos = () => {
        fetch(`${import.meta.env.VITE_HOST}/user/updatedInfo`, {
            method: 'PUT',
            body: JSON.stringify(informacion),
            headers: {
              'Content-Type': 'application/json'
            }
          })
            .then(response => response.json())
            .then(data => {
             
             alert("datos actualizados")
            })
            .catch(error => {
             
              console.error('Error al enviar los datos al backend:', error);
            });
    }
    const CambioDeContraseña=()=>{
        alert("cambio de constraseña")
    }
  return (
    <div className={styles.form}>
    <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={3}
    >
        <Stack direction="row" spacing={2}>
            <TextField id="outlined-basic" label={usuer.data?.name} variant="outlined" sx={{ width: 400 }} helperText="Nombre" name="name" onChange={handleInputChange} />
            <Button variant="text" color="primary" startIcon={<EditIcon color="primary" />}>
                Editar
            </Button>
        </Stack>
        <Stack direction="row" spacing={2}>
        <TextField id="outlined-basic" label={usuer.data?.lastname} variant="outlined" sx={{ width: 400 }} helperText="Apellido" name="lastname" onChange={handleInputChange} />
            <Button variant="text" color="primary" startIcon={<EditIcon color="primary" />}>
                Editar
            </Button>
        </Stack>
        <Stack direction="row" spacing={2}>
            <TextField id="outlined-basic" label={usuer.data?.email} variant="outlined" sx={{ width: 400,marginLeft:-12 }} helperText="Correo"   disabled/>
        
        </Stack>
        <Stack direction="row" spacing={2}>
            <TextField id="outlined-basic" label="*** " variant="outlined" sx={{ width: 400 }} helperText="Contraseña" name="password" onChange={handleInputChange} />
            <Button variant="text" color="primary" startIcon={<EditIcon color="primary" />}>
                Editar
            </Button>
        </Stack>
      <Stack 
      direction="row"
      spacing={3}
      
      >
        <Button variant="contained" color="primary" sx={{color:"white"}} onClick={Cambiodedatos}>
      Guardar
    </Button>
    <Button variant="contained" color="primary" sx={{color:"white"}}  onClick={CambioDeContraseña}>
    Restablcer contraseña
    </Button>
    </Stack>
    </Stack>
    
</div>
  )
}