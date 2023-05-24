import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import FiltersComponets from '../Filters'
import CarsdCategory from "../Card/CardsVistaCategory/CarsdCategory"
import { useSelector } from 'react-redux';

export default function CategoryCoursesComponest() {
  const cursos = useSelector((state) => state.filtercourses);
  const cursosInitiales = useSelector((state) => state.allCourseCategory);
  console.log(cursosInitiales)
return (
  <Box sx={{marginTop:6}}>
     
      <Typography variant="h5" color="initial" sx={{marginBottom:4 ,marginLeft:-150}}>{`${cursosInitiales.length} resultados para la categoria de ${cursosInitiales[0]?.Categories[0]?.name}`}</Typography>
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
   
      </Stack>
       </Box>

  )
}
