import React from 'react'
import CardComentshome from '../../Card/CardComentshome'
import { Stack } from '@mui/material'


export default function HomeCardComents() {
    let comentarios=[1,1,1,1,1,1,1,1]
  return (
    <>
    <Stack
    sx={{ marginRight: "50px" }}
     spacing={4}
    >
    {comentarios.map((comentario, index) => (
          <CardComentshome key={index} />
        ))}
    </Stack>
    </>
  )
}
