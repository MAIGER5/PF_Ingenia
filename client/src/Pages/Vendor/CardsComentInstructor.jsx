import React from 'react'
import { Stack } from '@mui/material'
import { useSelector } from 'react-redux'
import CardComentshome from '../../Components/Card/CardComentshome';

export const CardsComentInstructor = () => {

    const articuls = useSelector((state)=>state.articulosInstructors);
    // const comentarios = articuls.data?.slice(0, 1);

    return (
        <>
            <Stack
            sx={{ marginRight: "50px" }}
            spacing={4}
            >
                {articuls.map((comentario, index) => (
                    <CardComentshome key={index}
                        name={comentario.User?.name}
                        lastName={comentario.User?.lastname}
                        articulo={comentario.subtitleTwo}
                        articulo1={comentario.text}
                    />
                    ))}
            </Stack>
        </>
    )
}
