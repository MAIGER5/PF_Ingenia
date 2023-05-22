import { Box, Typography } from '@mui/material'
import CardsComponentLarge from '../../Card/CardsComponentLarge'
export default function HomeRebajas() {
  return (
   <Box  sx={{width:1500}}>
    <Typography variant="h5" color="primary" sx={{marginBottom:4, marginTop:8,marginLeft:-165}} >Rebajas</Typography>
    <CardsComponentLarge />
   </Box>
  )
}
