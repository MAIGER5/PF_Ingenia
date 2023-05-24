import React from 'react'
import { CardsCarr } from '../../Components/Carrito/CardsCarr'
import { Stack, Typography } from '@mui/material'

export default function Detallesdelpedido() {
  return (
   <>
  <Stack
  direction="column"
  justifyContent="center"
  alignItems="flex-start"
  spacing={4}
  sx={{marginTop:4, width:200}}
  >
   <Typography variant="body1" color="primary">Detalles del pedido</Typography>
   <CardsCarr/>
   </Stack>
   </>
  )
}
