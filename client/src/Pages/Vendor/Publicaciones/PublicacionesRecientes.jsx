import React from 'react'
import { Box, Typography } from '@mui/material'
import { CardsComentInstructor } from '../CardsComentInstructor'

export const PublicacionesRecientes = () => {
  return (
    <Box sx={{ width: "400px", marginRight: "70px" }}>
      
      <Typography variant="h5" color="primary" sx={{marginBottom:4}} align='left'>Publicaciones de Usuario</Typography>
        <CardsComentInstructor/>  
    </Box>
  )
}
