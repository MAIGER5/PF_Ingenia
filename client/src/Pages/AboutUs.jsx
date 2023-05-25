import React from 'react'
import Typography from '@mui/material/Typography'
import { Box, Stack } from '@mui/material'
import Manitos from '../assets/manitosabaut'



export default function AboutUs() {
  return (
    <Box sx={{marginTop:10 ,marginBottom:40}}>
      <Stack
     direction="row"
     justifyContent="center"
     
     spacing={14}
      >
     <Manitos/>
     <Stack  spacing={4}>
      <Typography variant="h2" color="primary"> Somos Ingenia</Typography>
      <Typography variant="body1" color="initial" sx={{width: 536,height: 150}} >
        una empresa especializada en la venta de cursos en línea, con un enfoque particular en el mundo de la tecnología de la información (TI).
        Nuestro objetivo es ofrecer a nuestros clientes una experiencia de aprendizaje en línea de alta calidad y asequible, que les permita mejorar sus habilidades
        técnicas y avanzar en sus carreras profesionales.
        Creemos que el aprendizaje en línea es una herramienta poderosa para democratizar el conocimiento y brindar a las personas acceso a oportunidades educativas de alta
        calidad, independientemente de su ubicación geográfica o situación económica. Es por eso que hemos invertido en tecnología y recursos para crear una plataforma
        de aprendizaje
        en línea intuitiva y fácil de usar, que permite a nuestros clientes aprender a su propio ritmo y en su propio horario.
        En Ingenia, nos apasiona la tecnología y la educación, y nos esforzamos por ofrecer cursos en línea de la más alta calidad en una amplia variedad de temas de
        TI. Nuestros instructores son expertos en sus campos, con amplia experiencia en la industria, y están comprometidos con proporcionar una experiencia de aprendizaje
        enriquecedora y práctica a nuestros clientes.
      </Typography>
      </Stack>
      </Stack>
    </Box>
  )
}
