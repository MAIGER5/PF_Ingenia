import React from 'react'
import {  Stack, Typography ,TextField, FormControlLabel, Radio} from '@mui/material'
import { useDispatch } from 'react-redux'
import { butonpaylap } from '../../Redux/Actions/butonpaypal'


export default function Formulario() {
    const dispatch = useDispatch()
  return (
   <>
    <Stack
          direction="column"
          alignItems="flex-start"
          spacing={3}>
          <Typography variant="h2" color="primary">Pagar</Typography>
        <Typography variant="body1" color="primary">Mis datos</Typography>
          </Stack>
        <Stack
        direction="row"
        alignItems="center"
        spacing={3}
        sx={{marginTop:3}}
        >
        <TextField id="standard-basic" label="nombre" variant="outlined" sx={{width:232}} />
        <TextField id="standard-basic" label="apellido" variant="outlined" sx={{width:232}} />
        </Stack>
        <Stack
        sx={{marginTop:3}}
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        spacing={3}>
        <TextField id="standard-basic" label="fecha de nacimiento" variant="outlined" sx={{width:232}} />
        <TextField id="standard-basic" label="Standard" variant="outlined" sx={{width:232}} />
        <Typography variant="body1" color="initial">Ingenia está obligado por ley a recaudar los impuestos sobre las transacciones<br/> de las compras realizadas en determinadas jurisdicciones fiscales</Typography>
        <Typography variant="body1" color="primary">Método de Pago</Typography>
        <FormControlLabel value="1" label="paypal" control={<Radio />} onClick={()=>dispatch(butonpaylap(true))} />
        </Stack>
   </>
  )
}
