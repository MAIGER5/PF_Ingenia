import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Purchaserejection() {
  return (
    <Box sx={{marginTop:20,marginBottom:30}}>
      <Stack
       
       justifyContent="center"
       alignItems="center"
       spacing={6}
      
      >
      <Typography variant="h1" color="secondary">Upps! algo salio mal </Typography>
    <Typography variant="h4" color="secondary">Revisa tu configuración  </Typography>
    <Button variant="contained" color="secondary" sx={{marginTop:10}}>
        <Link to="/MyCourses" style={{ textDecoration: 'none',color:"white" }}>Ir a mis cursos</Link>
    </Button>
      </Stack>
    
   </Box>
  )
  
}
