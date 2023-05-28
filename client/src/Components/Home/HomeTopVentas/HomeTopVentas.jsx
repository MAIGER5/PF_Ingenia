import { Box, Typography } from '@mui/material'
import Cards from '../../Card/Cards'

export default function HomeTopVentas() {
  return (
    <Box
      sx={{ 
        maxWidth: "700px"
      }}
    >
      <Typography variant="h5" color="primary"  sx={{marginBottom:4, marginLeft: "-0px" }} align='left'>Top ventas</Typography>
      <Cards/>
        
    </Box>
  )
}
