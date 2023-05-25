import { FormControlLabel, Radio, Stack, Typography } from '@mui/material'
import React from 'react'

export default function MetodoDePago() {
  return (
    <Stack
    sx={{ marginTop:20 }}
          direction="column"
          alignItems="flex-start"
          spacing={3}>
          
       
        <Typography variant="body1" color="primary">Método de Pago</Typography>
        <FormControlLabel value="1" label="paypal" control={<Radio />}  />
        </Stack>
  )
}
