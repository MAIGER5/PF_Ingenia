import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Cards from '../../Card/Cards'
import cursos from "../../Card/harcodedecursosborra"
export default function HomeTopVentas() {
  return (
    <Box  >
       
          <Typography variant="h5" color="primary"  sx={{   marginLeft:-31,marginBottom:4 }}>Top ventas</Typography>
         <Cards cursos={cursos}/>
        
    </Box>
  )
}
