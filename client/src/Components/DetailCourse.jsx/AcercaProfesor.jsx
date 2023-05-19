import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Grid, Rating } from '@mui/material';
import Avatar from '@mui/material/Avatar';


export function AcercaProfesor() {
  return (
    <Grid item xs={5.5}
    
                container
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              marginTop={8}>
                <Grid >
                    <Typography gutterBottom variant="h5" component="div" sx={{
                        textAlign: 'justify'}}
                    >
                        Acerca de
                    </Typography>
                </Grid>

                <Grid   container
                    direction="row"
                    justifyContent="left"
                    alignItems="center"
                    marginTop={5}
                >
                    <Grid item xs={1.8}>
                        <Avatar sx={{ bgcolor: '#FF8906',
                        width: 70, height: 70}}>M</Avatar>
                    </Grid>
                    <Grid item xs={5.5}   container
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="flex-start">
                        <Typography gutterBottom variant="h5" component="div" >
                            Maiger Ovalle
                        </Typography>
                        <Rating name="half-rating" size="large" defaultValue={2.5} precision={0.5} bgcolor='#E53170' />
                        <Typography gutterBottom variant="h8" component="div" sx={{
                        textAlign: 'center'}}
                        >
                        2 cursos publicados
                        </Typography>
                    </Grid>
                </Grid>

                <Grid >
                    <Typography gutterBottom variant="h6" component="div" sx={{
                        textAlign: 'justify'}}
                    >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo r incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    </Typography>
                </Grid>
                    
            </Grid>
  );
};

export default AcercaProfesor;