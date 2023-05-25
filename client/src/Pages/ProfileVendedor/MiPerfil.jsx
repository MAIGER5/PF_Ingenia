import React from 'react'
import { Stack,  TextField, Typography} from '@mui/material'


export default function MiPerfil() {
  return (
    <Stack
    sx={{marginTop:10}}
          direction="column"
          alignItems="flex-start"
          spacing={3}>
            <Typography variant="body1" color="primary">Estudios</Typography>
      <TextField id="outlined-basic" label="tus Estudios " variant="outlined" sx={{ width: 400 }}  />
      <Typography variant="body1" color="primary">Descripción</Typography>
      <TextField id="outlined-basic" label="tu Descripción" variant="outlined" sx={{ width: 400 }}  />
       
        </Stack>
  )
}