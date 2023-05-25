import React from 'react'
import styles from "./Profile.module.css";
import EditIcon from '@mui/icons-material/Edit';
import {  TextField, Stack, Button } from '@mui/material';
export default function Datos() {
    const CambioDeDatos = () => {
        alert("cambioa guardados")
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
            <TextField id="outlined-basic" label="Felipe " variant="outlined" sx={{ width: 400 }} helperText="Nombre" />
            <Button variant="text" color="primary" startIcon={<EditIcon color="primary" />}>
                Editar
            </Button>
        </Stack>
        <Stack direction="row" spacing={2}>
            <TextField id="outlined-basic" label="Garcia " variant="outlined" sx={{ width: 400 }} helperText="Apellido" />
            <Button variant="text" color="primary" startIcon={<EditIcon color="primary" />}>
                Editar
            </Button>
        </Stack>
        <Stack direction="row" spacing={2}>
            <TextField id="outlined-basic" label="felipeGarcia123@gmail.com " variant="outlined" sx={{ width: 400 }} helperText="Correo" />
            <Button variant="text" color="primary" startIcon={<EditIcon color="primary" />}>
                Editar
            </Button>
        </Stack>
        <Stack direction="row" spacing={2}>
            <TextField id="outlined-basic" label="***** " variant="outlined" sx={{ width: 400 }} helperText="Contraseña" />
            <Button variant="text" color="primary" startIcon={<EditIcon color="primary" />}>
                Editar
            </Button>
        </Stack>
      <Stack 
      direction="row"
      spacing={3}
      
      >
        <Button variant="contained" color="primary" sx={{color:"white"}} onClick={CambioDeDatos}>
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
