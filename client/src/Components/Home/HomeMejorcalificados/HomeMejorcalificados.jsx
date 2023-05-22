import { Box, Typography } from '@mui/material'
import CardsComponentLarge from '../../Card/CardsComponentLarge'

export default function HomeMejorcalificados() {
  return (
    <Box sx={{width:1525}}>
    <Typography variant="h5" color="primary" sx={{marginBottom:4, marginTop:7,marginLeft:-151}} >Mejor Calificados</Typography>
    <CardsComponentLarge />
   </Box>
  )
}
