import React from 'react'
import { Box ,Stack} from "@mui/material";
import FiltersComponets from '../Filters';
import Cardsresulserchbar from '../Card/CardSerchbar/CardsSerchbar';
export default function SerchCourses() {
  return (
    <Box sx={{marginLeft:6,marginTop:6}}>
    <Stack
     direction="row"
     
     spacing={10}
    >
    <FiltersComponets/>
    <Cardsresulserchbar/>
    </Stack>
   
   </Box>
  )
}
