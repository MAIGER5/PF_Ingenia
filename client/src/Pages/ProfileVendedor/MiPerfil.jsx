import React, { useState } from 'react'
import { Alert, Button, Stack,  TextField, Typography} from '@mui/material'


export default function MiPerfil() {
  const idUser=localStorage.getItem("idUser")
  const[informacion,setinformacio]= useState({
    idUser:idUser,
     studies:"",
     description:"",
     
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
          alert("cambios")
         })
         .catch(error => {
          
           console.error('Error al enviar los datos al backend:', error);
         });
       
 }
  return (
    <Stack
    sx={{marginTop:10}}
          direction="column"
          alignItems="flex-start"
          spacing={3}>
            <Typography variant="body1" color="primary">Estudios</Typography>
      <TextField id="outlined-basic" label="tus Estudios " variant="outlined" sx={{ width: 400 }} onChange={handleInputChange} name="studies" />
      <Typography variant="body1" color="primary">Descripción</Typography>
      <TextField id="outlined-basic" label="tu Descripción" variant="outlined" sx={{ width: 400 }} onChange={handleInputChange} name="description"/>
       <Button onClick={Cambiodedatos} >guardar</Button>
        </Stack>
  )
}