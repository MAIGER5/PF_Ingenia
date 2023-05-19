import React, { useEffect, useState } from 'react'
import { Box, Stack, Button,  } from '@mui/material';
import { useSelector } from 'react-redux';
import CardSerbar from './CardSerchbar';



export default function Cardsresulserchbar() {
    const cursos = useSelector((state) => state.allCourseCategory);
    const cursosfiltrados = useSelector((state) => state.filtercourses);
   
    return (
      <>
        <Box>
          <Stack spacing={6}>
            {cursosfiltrados.length > 0 ? (
              cursosfiltrados.map((curso) => (
                <CardSerbar
                  key={curso.idCourse}
                  idCourse={curso.idCourse}
                  title={curso.title}
                  description={curso.description}
                  duration={curso.duration}
                  dificulty={curso.dificulty}
                  price={curso.price}
                  image={curso.image}
                  lenguage={curso.lenguage}
                />
              ))
            ) : (
              cursos.map((curso) => (
                <CardSerbar
                  key={curso.idCourse}
                  idCourse={curso.idCourse}
                  title={curso.title}
                  description={curso.description}
                  duration={curso.duration}
                  dificulty={curso.dificulty}
                  price={curso.price}
                  image={curso.image}
                  lenguage={curso.lenguage}
                  
                />
              ))
            )}
         
          </Stack>
        </Box>
      </>
    );
  }