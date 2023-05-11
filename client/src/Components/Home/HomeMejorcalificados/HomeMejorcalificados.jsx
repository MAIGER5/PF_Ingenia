import { Box, Typography } from '@mui/material'
import React from 'react'
import CardsComponet from '../../Card/CardsComponet'
import cursos from '../../Card/harcodedecursosborra'

export default function HomeMejorcalificados() {
  return (
    <Box  sx={{width:1540}}>
    <Typography variant="h5" color="primary" sx={{marginBottom:4, marginTop:7,marginLeft:-150}} >Mejor Calificados</Typography>
    <CardsComponet cursos={cursos} />
   </Box>
  )
}
