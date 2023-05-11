
import React from 'react'
import CardHome from './CardHome'
import { Box, Grid } from '@mui/material';

export default function Cards(cursos) {

    return (
        <Box sx={{width:890, height:623}} >
        <Grid container spacing={3} sx={{marginLeft:-35}} >
          {cursos.cursos.map((curso) => (
            <Grid item xs={3} sm={6} md={4} key={curso.title}>
              <CardHome
                title={curso.title}
                description={curso.description}
                imgCurso={curso.imgCurso}
                instructor={curso.instructor}
                price={curso.price}
                ratings={curso.ratings}
              />
            </Grid>
          ))}
        </Grid>
        </Box>
      );
    }