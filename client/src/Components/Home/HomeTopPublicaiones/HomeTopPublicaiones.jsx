import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import HomeCardComents from './HomeCardComents'


export default function HomeTopPublicaiones() {
  return (
    <Box sx={{ width: "400px", marginRight: "70px" }}>
      
      <Typography variant="h5" color="primary" sx={{marginBottom:4}} align='left'>Top publicaciones</Typography>
        <HomeCardComents/>
      
        
    </Box>
  )
}
