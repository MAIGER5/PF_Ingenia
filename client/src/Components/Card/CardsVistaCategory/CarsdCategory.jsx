import React, { useEffect, useState } from 'react'
import { Box, Stack,  } from '@mui/material';
import { useSelector } from 'react-redux';
import CardCategory from './CardCategory';


export default function Cardsresulcategory() {

    const cursos=useSelector((state)=>state.filtercourses)
    const  cursosinitiales = useSelector((state)=> state.allCourseCategory)

    return (
        <>
           <Box>
      <Stack spacing={6}>
        {cursos.length > 0 ? (
          cursos.map((curso) => (
            <CardCategory
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
          cursosinitiales.map((curso) => (
            <CardCategory
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
    )
}
