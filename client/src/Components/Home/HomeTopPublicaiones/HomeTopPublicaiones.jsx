import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import HomeCardComents from './HomeCardComents'


export default function HomeTopPublicaiones() {
  return (
    <Box>
      
      <Typography variant="h5" color="primary" sx={{marginBottom:4, marginLeft:17}} >Top publicaciones</Typography>
        <HomeCardComents/>
      
        
    </Box>
  )
}
