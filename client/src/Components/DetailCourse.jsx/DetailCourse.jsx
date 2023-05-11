import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Grid, Rating } from '@mui/material';
import CardCategory from '../Card/CardCategory';
import ValoracionesCurso from './ValoracionesCurso';
import AcercaProfesor from './AcercaProfesor';


function DetailCourse() {
  return (
    <div  > 

        <CardCategory/>


        <Grid   container
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            className='interno dos'
            marginTop={6}
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo r incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    </Typography>

                    <Typography gutterBottom variant="h5" component="div" sx={{
                        textAlign: 'justify'
                    }}>
                        Método de entrega
                    </Typography>
                    <Typography gutterBottom variant="h8" component="div" sx={{
                        textAlign: 'justify'
                    }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo r incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    </Typography>

                    <Typography gutterBottom variant="h5" component="div" sx={{
                        textAlign: 'justify'

                    }}>
                        Requisitos
                    </Typography>
                    <Typography gutterBottom variant="h8" component="div" sx={{
                        textAlign: 'justify'

                    }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo r incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    </Typography>

                </Grid>
            </Grid>
                
            <Grid item xs={5.8}>
                <Grid >
                    <Typography gutterBottom variant="h5" component="div" sx={{
                        textAlign: 'justify'

                    }}>
                        Lo que aprenderás
                    </Typography>
                    <Typography gutterBottom variant="h8" component="div" sx={{
                        textAlign: 'justify'

                    }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo r incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    </Typography>

                    <Typography gutterBottom variant="h5" component="div" sx={{
                        textAlign: 'justify'

                    }}>
                        Método de entrega
                    </Typography>
                    <Typography gutterBottom variant="h8" component="div" sx={{
                        textAlign: 'justify'

                    }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo r incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
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
    </div>
  );
};

export default DetailCourse;