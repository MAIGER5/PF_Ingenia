import { Box, Grid, Typography,  } from '@mui/material'
import React from 'react'
import ButtonCategori from './ButtonCategori'

export default function HomeCategorias() {
    let categorias=[1,2,3,4,5,6,4,5,6,7,8,9]
  return (
   
    <Box sx={{marginTop:4, width:1600}}>
         <Typography variant="h5" color="primary"  sx={{marginBottom:4, marginTop:4,marginLeft:-169}}>Categorias</Typography>
         <Grid container spacing={3} sx={{marginLeft:10}} >
     {categorias.map(categori=>(
        <Grid item xs={3} sm={6} md={4} xl={2}>
        <ButtonCategori/>
        </Grid>
     ))}
     </Grid>
    </Box>
  )
}
