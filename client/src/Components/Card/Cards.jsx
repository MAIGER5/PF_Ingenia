
import React from 'react'
import CardHome from './CardHome'
import { Box, Grid } from '@mui/material';
import { useSelector } from 'react-redux';

export default function Cards() {

  const curs = useSelector((state)=> state.allCourse)
  const cursos = curs.slice(0, 6);

    return (
        <Box  >
        <Grid container spacing={3} sx={{marginLeft:5}} >
          {cursos.map((curso) => (
            <Grid item xs={3} sm={6} md={4} key={curso.idCourse}>
              <CardHome
                idCourse = {curso.idCourse}
                title={curso.title}
                description={curso.description}
                image={curso.image}
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