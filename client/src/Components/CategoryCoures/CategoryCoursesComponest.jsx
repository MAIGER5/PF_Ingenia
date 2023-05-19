import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import FiltersComponets from '../Filters'
import PaginationButtons from '../Pagination/Pagination'
import CarsdCategory from "../Card/CardsVistaCategory/CarsdCategory"
import { useParams } from 'react-router'

export default function CategoryCoursesComponest() {

  const {idcategory} = useParams();

return (
  <Box sx={{marginTop:6}}>
      <p> {idcategory} </p>
      <Typography variant="h5" color="initial" sx={{marginBottom:4 ,marginLeft:-170}}>3.229 resultados para “ecommerce”</Typography>
      <Stack
        direction="row"
        spacing={15}
        sx={{marginLeft:5}}
      >
      <FiltersComponets/>
      <CarsdCategory/>
      </Stack>
      <Stack
       sx={{marginTop:6, marginBottom:-6}}
       justifyContent="center"
       alignItems="center"
      
      >
      <PaginationButtons/>
      </Stack>
       </Box>
  )
}
