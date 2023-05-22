import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, Grid, Hidden, Rating } from '@mui/material';
import Fab from '@mui/material/Fab';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';

function CardSerbar({title, description, dificulty,  price, image}) {
  return (
    <Card sx={{ 
        display: 'flex',
        alignItems: 'center',
        }}
        >
        <CardMedia
          sx={{ height: 300, width: 600}}
          component='img'
          image={image}
          title={title}
        />

        <CardContent>
            <Grid container spacing={1}
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                padding={2} >

                <Grid >
                    <Typography gutterBottom variant="h3" component="div" sx={{
                        textAlign: 'justify'

                    }}>
                      {title}
                    </Typography>

                    <Typography gutterBottom variant="h5" component="div" sx={{
                        textAlign: 'justify'

                    }}>
                          { description}
                    </Typography>
                </Grid>

                <Grid   container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start">
                        
                    <Grid item xs={8}>
                        <Typography variant="h6" color="text.Primary" sx={{
                            textAlign: 'justify'

                        }}>
                            Por: gisell
                        </Typography>

                        <Typography gutterBottom variant="h7" component="div" sx={{
                        textAlign: 'justify'

                        }}>
                          {dificulty}
                        </Typography>
                        
                        <Grid width={600}
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="baseline"
                        >
                            <Grid>
                                <Rating name="half-rating" size="large" defaultValue={2.5} precision={0.5}
                                color='#E53170' />
                            </Grid>


                            <Button component={Link} to={'/SignupUsuario'} variant='contained' startIcon={<ShoppingCartIcon/>} 
                                >Add
                            </Button>

                            <Fab disabled aria-label="like">
                                <FavoriteIcon />
                            </Fab>
                            <Grid item xs={3}>
                                <Box component='h2'
                                >
                                  {price}
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
  );
};

export default CardSerbar;