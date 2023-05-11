import { Box, Typography } from '@mui/material'
import React from 'react'
import cursos from "../../Card/harcodedecursosborra"
import CardsComponet from '../../Card/CardsComponet'
export default function HomeRebajas() {
  return (
   <Box  sx={{width:1540}}>
    <Typography variant="h5" color="primary" sx={{marginBottom:4, marginTop:10,marginLeft:-165}} >Rebajas</Typography>
    <CardsComponet cursos={cursos} />
   </Box>
  )
}
