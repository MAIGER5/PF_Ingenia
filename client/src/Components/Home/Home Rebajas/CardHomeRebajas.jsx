
import React from 'react';

import { Box, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import CardHome from '../../Card/CardHome';

export const CardHomeRebajas = () => {

    const curs = useSelector((state)=> state.cursosRebajas)
    const cursos = curs.slice(10, 18);
  
      return (
          <Box  >
          <Grid container spacing={5} sx={{marginLeft:3 }} >
            {cursos.map((curso) => (
              <Grid item xs={3} sm={6} md={3} xl={3} key={curso.idCourse}>
                <CardHome
                  idCourse = {curso.idCourse}
                  title={curso.title}
                  lenguage={curso.lenguage}
                  image={curso.image}
                  instructorLastName={curso.Users[0]?.lastname}
                  instructorName={curso.Users[0]?.name}
                  price={curso.price}
                  habilities={curso.habilities}
                />
              </Grid>
            ))}
          </Grid>
          </Box>
        );
}
