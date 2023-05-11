import React from 'react'
import CardComentshome from '../../Card/CardComentshome'
import { Stack } from '@mui/material'


export default function HomeCardComents() {
    let comentarios=[1,1,1,1,1,1,1,1,1]
  return (
    <>
    <Stack
    sx={{marginLeft:45}}
     spacing={4}
    >
    {comentarios.map(comentarios=>(
         <CardComentshome key={comentarios.title}/>
    ))}
    </Stack>
    </>
  )
}
