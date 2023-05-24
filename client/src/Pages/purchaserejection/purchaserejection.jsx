import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Caritapasareladepagos from '../../assets/caritapasareladepagos'

export default function Purchaserejection() {
  return (
    <Box sx={{marginTop:20,marginBottom:30}}>
      <Stack
       
       justifyContent="center"
       alignItems="center"
       spacing={6}
      
      >
        <Caritapasareladepagos/>
      <Typography variant="h1" color="secondary">Upps! cancelaste tu compra </Typography>
    <Typography variant="h4" color="secondary">vuelve a intentar  </Typography>
    <Button variant="contained" color="secondary" sx={{marginTop:10}}>
        <Link to="/Carrito" style={{ textDecoration: 'none',color:"white" }}>Ir a mi carrito</Link>
    </Button>
      </Stack>
    
   </Box>
  )
  
}
