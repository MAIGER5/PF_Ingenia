import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import FiltersComponets from '../Filters'
import CarsdCategory from "../Card/CardsVistaCategory/CarsdCategory"
import { useSelector } from 'react-redux'

export default function CategoryCoursesComponest() {
 const cursos=useSelector(state=>state.allCourseCategory)
 const cursosfiltrados=useSelector(state=>state. filtercourses)

return (
  <Box sx={{ marginTop: 6 }}>
  {cursosfiltrados.length > 0 ? (
    <Typography variant="h5" color="initial" sx={{ marginBottom: 4, marginLeft: -200 }}>
      {`${cursosfiltrados.length} resultados para `}
    </Typography>
  ) : (
    <Typography variant="h5" color="initial" sx={{ marginBottom: 4, marginLeft: -200 }}>
      {`${cursos.length} resultados para `}
    </Typography>
  )}

  <Stack direction="row" spacing={15} sx={{ marginLeft: 5 }}>
    <FiltersComponets />
    <CarsdCategory />
  </Stack>

</Box>
  )
}
