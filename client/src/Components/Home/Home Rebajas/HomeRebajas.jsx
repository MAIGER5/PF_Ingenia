import { Box, Typography } from '@mui/material'
import { CardHomeRebajas } from './CardHomeRebajas'
// import CardsComponentLarge from '../../Card/CardsComponentLarge'


export default function HomeRebajas() {
  return (
   <Box  marginLeft={5} sx={{width:1350}}>
    <Typography variant="h5" color="primary" sx={{marginBottom:4, marginTop:8,marginLeft:-142}} >Rebajas</Typography>
    <CardHomeRebajas />
   </Box>
  )
}
