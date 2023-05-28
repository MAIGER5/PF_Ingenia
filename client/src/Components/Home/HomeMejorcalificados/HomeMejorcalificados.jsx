import { Box, Typography } from '@mui/material'
import CardsComponentLarge from '../../Card/CardsComponentLarge'

export default function HomeMejorcalificados() {
  return (
    <Box  marginLeft={5} sx={{width:1350}}>
    <Typography variant="h5" color="primary"  sx={{marginBottom:4, marginTop:8,marginLeft:-130}} >Mejor Calificados</Typography>
    <CardsComponentLarge />
   </Box>
  )
}
