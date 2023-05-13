
import React from 'react'
import CardHome from './CardHome'
import { Box, Grid } from '@mui/material';
import { useSelector } from 'react-redux';

export default function CardsComponet() {

  const curs = useSelector((state)=> state.allCourse)
  const cursos = curs.slice(0, 6);

    return (
        <Box  >
        <Grid container spacing={5} sx={{marginLeft:3 }} >
          {cursos.map((curso) => (
            <Grid item xs={3} sm={6} md={4} xl={2} key={curso.idCourse}>
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