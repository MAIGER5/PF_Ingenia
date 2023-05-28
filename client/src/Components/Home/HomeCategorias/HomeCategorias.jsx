import React, { useEffect, useState } from 'react'
import { Box, Button, Grid, Typography,  } from '@mui/material'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { filterCoursesCategory } from '../../../Redux/Actions/filterCoursesCategory'
import { getCoursesCategory } from '../../../Redux/Actions/getCoursescategory'

export default function HomeCategorias() {

  const dispatch = useDispatch();
  const categorias = useSelector((state) => state.categories);

  const handledispach = (categori) => {
    dispatch(filterCoursesCategory(categori.idCategory));
    dispatch(getCoursesCategory([categori.name])); 
   
  };

  return (
    <Box marginLeft={7} sx={{ marginTop: 4, width: 1360 }}>
      <Typography variant="h5" color="primary" sx={{ marginBottom: 4, marginTop: 4, marginLeft: -128 }}>
        Categorias
      </Typography>
      <Grid container spacing={1} sx={{ marginLeft: 3 }}>
        {categorias.map((categori) => (
          <Grid marginRight={5} item xs={3} sm={5} md={4} xl={2} key={categori.idCategory}>
            <Link to="/CategoryCourses">
              <Button
                onClick={() => handledispach(categori)}
                variant="contained"
                color="secondary"
                sx={{ width: 220, height: 60}}
              >
                {categori.name}
              </Button>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}