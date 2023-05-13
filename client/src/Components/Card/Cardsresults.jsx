import React, { useEffect, useState } from 'react'
import CardCategoresults from './CardCategoresults'
import { Box, Stack } from '@mui/material';


export default function Cardsresults() {
    const [cards, setcards] = useState([])
 
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:3001/courses');
                const data = await response.json();
                setcards(data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    return (
        <>
        <Box >
         <Stack spacing={6}>
        {cards.map(curso=>(
        <CardCategoresults
         key={curso.IdCuros}
         title={curso.title}
         descriction={curso.descriction}
         difficulty={curso.difficulty }
         ratings={curso.ratings}
         price={curso.price}
         imgCurso={curso.imgCurso}
         instructor={curso.instructor}
        />
        ))}
        </Stack>
        </Box>  
        </>
    )
}
