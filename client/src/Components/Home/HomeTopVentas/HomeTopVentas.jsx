import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Cards from '../../Card/Cards'
import cursos from "../../Card/harcodedecursosborra"
export default function HomeTopVentas() {
  return (
    <Box sx={{width:1000, height:670, }}  >
       
          <Typography variant="h5" color="primary"  sx={{   marginLeft:-92,marginBottom:4 }}>Top ventas</Typography>
         <Cards cursos={cursos}/>
        
    </Box>
  )
}
