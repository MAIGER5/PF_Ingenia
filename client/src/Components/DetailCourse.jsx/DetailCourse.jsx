import React from 'react';
import Typography from '@mui/material/Typography';
import { Grid, Rating } from '@mui/material';
import ValoracionesCurso from './ValoracionesCurso';
import AcercaProfesor from './AcercaProfesor';
import cursos from '../Card/harcodedecursosborra';
import CardsD from '../Card/CardsD';



function DetailCourse() {


  return (

    <Grid 
        marginX={15}
        marginY={3}
    > 

        <CardsD cursos={cursos} />

        <Grid   container
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            className='interno dos'
            marginTop={5}
            maxHeight={300}>
            <Grid item xs={5}>
                <Grid >
                    <Typography gutterBottom variant="h5" component="div" sx={{
                        textAlign: 'justify'
                    }}>
                        Lo que aprenderás
                    </Typography>
                    <Typography gutterBottom variant="h8" component="div" sx={{
                        textAlign: 'justify'
                    }}>
                        Java es un lenguaje de programación que fue diseñado para ser portable o compatible con cualquier computadora o sistema operativo. La portabilidad se logra a través de la compilación de códigos independientes que se ejecutan en una máquina virtual de Java conocida
                    </Typography>

                    <Typography gutterBottom variant="h5" component="div" sx={{
                        textAlign: 'justify'
                    }}>
                        Metodología de enseñanza
                    </Typography>
                    <Typography gutterBottom variant="h8" component="div" sx={{
                        textAlign: 'justify'
                    }}>
                        La metodología empleada en los cursos, es el trabajo colaborativo y el aprendizaje significativo, de modo que involucre al participante de modo activo y la transformación de información en conocimiento sea lo más eficiente.
                    </Typography>

                    <Typography gutterBottom variant="h5" component="div" sx={{
                        textAlign: 'justify'

                    }}>
                        Requisitos
                    </Typography>
                    <Typography gutterBottom variant="h8" component="div" sx={{
                        textAlign: 'justify'

                    }}>
                        Disponibilidad horaria
                        Herramientas informaticas y ofimaticas
                        Nivel basico tics
                    </Typography>

                </Grid>
            </Grid>
                
            <Grid item xs={5.8}>
                <Grid >
                    <Typography gutterBottom variant="h5" component="div" sx={{
                        textAlign: 'justify'

                    }}>
                        Descripción
                    </Typography>
                    <Typography gutterBottom variant="h8" component="div" sx={{
                        textAlign: 'justify'

                    }}>
                       La metodología empleada en los cursos, es el trabajo colaborativo y el aprendizaje significativo, de modo que involucre al participante de modo activo y la transformación de información en conocimiento sea lo más eficiente.
                    </Typography>

                    <Typography gutterBottom variant="h5" component="div" sx={{
                        textAlign: 'justify'

                    }}>
                        Categoria
                    </Typography>
                    <Typography gutterBottom variant="h8" component="div" sx={{
                        textAlign: 'justify'

                    }}>
                        Telecomuniaciones, programacion, desarrollo, develop
                    </Typography>

                </Grid>
            </Grid>
        </Grid>



        <Grid   container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            className='interno tres'
        >
            
            <ValoracionesCurso/>
            <AcercaProfesor/>



            
        </Grid>
    </Grid>
  );
};

export default DetailCourse;