import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Cards from '../../Card/Cards'



export default function HomeTopVentas() {
  return (
    <Box>
       
          <Typography variant="h5" color="primary"  sx={{   marginLeft:-75,marginBottom:4 }}>Top ventas</Typography>
         <Cards/>
        
    </Box>
  )
}
