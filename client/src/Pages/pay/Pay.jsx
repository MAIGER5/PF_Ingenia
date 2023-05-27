import { Box, Stack} from '@mui/material'
import React from 'react'
import Formulario from './Formulario'
import Detallededompara from './Detallededompara'
import Detallesdelpedido from './Detallesdelpedido'


export default function Pay() {
 
  return (
    <Box sx={{padding:5,marginBottom:30}}>
      <Stack
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      spacing={4}
      >
        <Box>
        < Detallesdelpedido/>
        </Box>
        <Box  >
          <Detallededompara/>
          <Formulario/>
        </Box>
      </Stack>
      
    </Box>
  )
}
