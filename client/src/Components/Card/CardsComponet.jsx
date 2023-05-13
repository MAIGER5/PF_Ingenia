
import React from 'react'
import CardHome from './CardHome'
import { Box, Grid } from '@mui/material';
import { useSelector } from 'react-redux';

export default function CardsComponet() {

  const cursos = useSelector((state)=>state.allCourse)

    return (
        <Box  >
        <Grid container spacing={3} sx={{marginLeft:6 }} >
          {cursos.map((curso) => (
            <Grid item xs={3} sm={6} md={4} xl={2} key={curso.id}>
              <CardHome
                id = {curso.id}
                title={curso.title}
                description={curso.description}
                imgCurso={curso.image}
                instructor={curso.users}
                price={curso.price}
                habilities={curso.habilities}
              />
            </Grid>
          ))}
        </Grid>
        </Box>
      );
    }