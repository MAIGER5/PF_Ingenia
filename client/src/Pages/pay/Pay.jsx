import { Box, Stack, Typography} from '@mui/material'

import React from 'react'
import Formulario from './Formulario'
import Detallededompara from './Detallededompara'
import Detallesdelpedido from './Detallesdelpedido'

export default function Pay() {
  return (
    <Box sx={{padding:5}}>
      <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={4}
      >
        <Box>
         <Formulario/>
        </Box>
        <Box >
          <Detallededompara/>
        </Box>
      </Stack>
      < Detallesdelpedido/>
    </Box>
  )
}
