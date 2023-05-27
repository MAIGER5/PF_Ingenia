import React from 'react'
import { CardsCarr } from '../../Components/Carrito/CardsCarr'
import { Stack, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import NotProduct from './NotProduct'

export default function Detallesdelpedido() {
  const carri = useSelector((state)=>state.allCarrito)
  return (
   <>
  <Stack
  direction="column"
  justifyContent="center"
  alignItems="flex-start"
  spacing={4}
  
  >
    <Typography variant="h2" color="primary">Pagar</Typography>
   <Typography variant="body1" color="primary">Detalles del pedido</Typography>
   {carri.length>0?<CardsCarr/>:<NotProduct/>}
   
   </Stack>
   </>
  )
}
