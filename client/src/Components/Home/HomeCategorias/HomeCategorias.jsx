import React from 'react'
import { Box, Button, Grid, Typography,  } from '@mui/material'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { filterCoursesCategory } from '../../../Redux/Actions/filterCoursesCategory'

export default function HomeCategorias() {

    const categorias = useSelector((state)=> state.categories)


    return (
   
    <Box sx={{marginTop:4, width:1550}}>
      <Typography variant="h5" color="primary"  sx={{marginBottom:4, marginTop:4,marginLeft:-165}}>Categorias</Typography>
      <Grid container spacing={3} sx={{marginLeft:3}} >
        {categorias.map(categori=>(
          <Grid item xs={3} sm={5} md={4} xl={2}>
            <Link to='/CategoryCourses'>
              <Button onClick={()=> dispatch(filterCoursesCategory(categori.idCategory))} variant="contained" color="secondary" sx={{width:220 ,height:60}}>
                {categori.name}
              </Button>
            </Link>
          </Grid>
        ))}
     </Grid>
    </Box>
  )
}
