import React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Stack } from '@mui/material'

export default function ImagenDePerfilVendedor() {
    const CambioDeFoto=()=>{
        alert("cambio de foto")
    }
  return (
    <>
    <Stack
     direction="column"
     justifyContent="center"
     alignItems="center"
     spacing={2}
    >
    <Typography variant="body1" color="initial">Añadir o cambiar imagen</Typography>
    <Button variant="contained" color="primary" onClick={ CambioDeFoto}>
    Seleccionar Imagen
    </Button>
    </Stack>
    </>
  )
}
