import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import Caritapasareladepagos from '../../assets/caritapasareladepagos'
import { Link } from 'react-router-dom'

export default function Purchaseconfirmation() {
  return (
   <Box sx={{marginTop:16}}>
    <Stack
     direction="row"
     justifyContent="center"
     alignItems="center"
     spacing={2}
    >
   <Caritapasareladepagos/>
   <Stack
   direction="column"
   justifyContent="center"
   alignItems="center"
   spacing={2}
   >
   <Typography variant="h1" color="secondary">Disfruta tu <br/>compra!</Typography>
    <Typography variant="h6" color="secondary">Dirigete al curso, podrás encontrar <br/>las intrucciones de la entrega de tu curso</Typography>
   </Stack>
   
    </Stack>
    <Button variant="contained" color="secondary" sx={{marginTop:10,marginBottom:20}}>
        <Link to="/MyCourses" style={{ textDecoration: 'none',color:"white" }}>Ir a mis cursos</Link>
    </Button>
   </Box>
  )
}
