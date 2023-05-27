import React from 'react'
import Typography from '@mui/material/Typography'
import {  Divider, Stack } from '@mui/material'
import Paypalbutton from '../../PayPal/paypalbuton'
import { useSelector } from 'react-redux'


export default function Detallededompara() {
    const buton=useSelector(state=>state.ButtonPaypal)
    const totalpagar=useSelector(state=>state.totalCarrito)
  return (
  <>
  <Stack
  sx={{marginBottom:3}}
  spacing={3}
  >
  <Typography variant="h2" color="primary" >Resumen</Typography>
  <Stack
  direction="row"
  spacing={3}
 
  >
  <Typography variant="body1" color="initial">Precio Original</Typography>
  <Typography variant="body1" color="initial">${totalpagar} </Typography>
   </Stack>
   <Divider variant="fullWidth" color="initial"/>
   <Stack
  direction="row"
  spacing={3}
  >
  <Typography variant="body1" sx={{color:"gray"}}>Total:</Typography>
  <Typography variant="body1" color="initial">${totalpagar} </Typography>
   </Stack>
  <Typography variant="body1" color="initial">Al completar la compra, aceptas estas Condiciones de uso.</Typography>
  { buton?  <Paypalbutton/> : ""}
 
  </Stack>
  </>
  )
}
