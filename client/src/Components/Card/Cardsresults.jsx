import React, { useEffect, useState } from 'react'
import CardCategoresults from './CardCategoresults'
import { Box, Stack } from '@mui/material';
import { useSelector } from 'react-redux';


export default function Cardsresults() {

    const cursos = useSelector((state)=> state.allCourse)

    return (
        <>
            <Box >
                <Stack spacing={6}>
                    {
                        cursos.map(curso=>(
                            <CardCategoresults
                                key={curso.idCourse}
                                idCourse={curso.idCourse}
                                title={curso.title}
                                description={curso.description}
                                duration={curso.duration }
                                dificulty={curso.dificulty}
                                price={curso.price}
                                image={curso.image}
                                lenguage={curso.lenguage}
                            />
                        ))
                    }
                </Stack>
            </Box>  
        </>
    )
}
