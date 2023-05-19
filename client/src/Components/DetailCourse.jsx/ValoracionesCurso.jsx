import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Grid, Rating } from '@mui/material';
import Avatar from '@mui/material/Avatar';

function ValoracionesCurso() {
  return (
    <Grid item xs={5.5}
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              marginTop={8}
            >
                <Grid >
                    <Typography gutterBottom variant="h5" component="div" sx={{
                        textAlign: 'justify'}}
                    >
                        Valoraciones del curso
                    </Typography>
                </Grid>

                <Grid   
                    container
                    direction="row"
                    justifyContent="left"
                    alignItems="center"
                    marginTop={5}
                >
                    <Grid item xs={1.5}>
                        <Avatar sx={{ bgcolor: '#E53170',
                        width: 50, height: 50}}>M</Avatar>
                    </Grid>
                    <Grid item xs={5.5}   container
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="flex-start">
                        <Typography gutterBottom variant="h5" component="div" >
                            Maiger Ovalle
                        </Typography>
                        <Rating name="half-rating" size="large" defaultValue={2.5} precision={0.5} />

                    </Grid>
                </Grid>

                <Grid >
                    <Typography gutterBottom variant="h6" component="div" sx={{
                        textAlign: 'justify',
                        marginTop: 2}}
                    >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo r incididunt 
                    </Typography>
                </Grid>
            </Grid>
  );
};

export default ValoracionesCurso;