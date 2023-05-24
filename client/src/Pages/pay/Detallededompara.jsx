import React from 'react'
import Typography from '@mui/material/Typography'
import { Button, Divider, Stack } from '@mui/material'
import Paypalbutton from '../../PayPal/paypalbuton'
import { useSelector } from 'react-redux'


export default function Detallededompara() {
    const buton=useSelector(state=>state.ButtonPaypal)
  return (
  <>
  <Stack
  sx={{marginTop:-10,marginBottom:3}}
  spacing={3}
  >
  <Typography variant="h2" color="primary" >Resumen</Typography>
  <Stack
  direction="row"
  spacing={3}
 
  >
  <Typography variant="body1" color="initial">Precio Original</Typography>
  <Typography variant="body1" color="initial">$100us</Typography>
   </Stack>
   <Divider variant="fullWidth" color="initial"/>
   <Stack
  direction="row"
  spacing={3}
  >
  <Typography variant="body1" color="initial">Total:</Typography>
  <Typography variant="body1" color="initial">$100us</Typography>
   </Stack>
  <Typography variant="body1" color="initial">Al completar la compra, aceptas estas Condiciones de uso.</Typography>
  { buton?  <Paypalbutton/> : <Button>PAGAR</Button>}
 
  </Stack>
  </>
  )
}
