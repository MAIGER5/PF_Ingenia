import React, { useState } from 'react'
import styles from "./Profile.module.css";
import EditIcon from '@mui/icons-material/Edit';
import {  TextField, Stack, Button, Alert, Collapse, IconButton, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';

export default function Datos() {
    const usuer=useSelector(state=>state.usercrud)
    const idUser=localStorage.getItem("idUser")
    const [open, setOpen] = React.useState(false);
    const dispach=useDispatch()
    const[informacion,setinformacio]= useState({
       idUser:idUser,
        name:"",
        lastname:"",
        password:""
    })
  
  
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
             setOpen(true)
            })
            .catch(error => {
             
              console.error('Error al enviar los datos al backend:', error);
            });
          
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
   
    </Stack>
    </Stack>
    <Box sx={{ width: '100%' , marginTop:4}}>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          datos actualizados
        </Alert>
      </Collapse>
      
    </Box>
    
</div>
  )
}