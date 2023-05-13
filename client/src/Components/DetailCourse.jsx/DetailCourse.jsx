import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { Grid, Rating } from '@mui/material';
import ValoracionesCurso from './ValoracionesCurso';
import AcercaProfesor from './AcercaProfesor';
import CardsDetail from './CardsDetail';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailCourse } from '../../Redux/Actions/getDetailCourse';
import { cleandDetail } from '../../Redux/Actions/cleanDetail';
import { useParams } from 'react-router-dom';


function DetailCourse() {

    const {id} = useParams();
    console.log({id})
    const dispatch = useDispatch();

    const curses = useSelector((state)=>state.courseDetail)

    useEffect(()=> {
        dispatch(getDetailCourse(id));
        
        return ()=> {
            dispatch(cleandDetail())
        }
    }, [id]);

    return (

        <Grid 
            marginX={15}
            marginY={3}
        > 

            <CardsDetail />

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
                            {curses.description}
                        </Typography>

                        <Typography gutterBottom variant="h5" component="div" sx={{
                            textAlign: 'justify'
                        }}>
                            Metodología de enseñanza
                        </Typography>
                        <Typography gutterBottom variant="h8" component="div" sx={{
                            textAlign: 'justify'
                        }}>
                            {curses.habilities}
                        </Typography>

                        <Typography gutterBottom variant="h5" component="div" sx={{
                            textAlign: 'justify'

                        }}>
                            Requisitos
                        </Typography>
                        <Typography gutterBottom variant="h8" component="div" sx={{
                            textAlign: 'justify'

                        }}>
                            {curses.description}
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
                            {curses.description}
                        </Typography>

                        <Typography gutterBottom variant="h5" component="div" sx={{
                            textAlign: 'justify'

                        }}>
                            Categoria
                        </Typography>
                        <Typography gutterBottom variant="h8" component="div" sx={{
                            textAlign: 'justify'

                        }}>
                            {curses.title}
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