import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, Grid, Hidden, Rating } from '@mui/material';
import Fab from '@mui/material/Fab';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';

function CardCategory() {
  return (
    <Card sx={{ 
        display: 'flex',
        alignItems: 'center',
        }}
        >
        <CardMedia
          sx={{ height: 300, width: 600}}
          component='img'
          image="https://okdiario.com/img/2021/04/20/curiosidades-sobre-los-gatos-domesticos-635x358.jpg"
          title="imagen de curso"
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
                        Ecommerce & Marketing course: Agency, Marketer
                    </Typography>

                    <Typography gutterBottom variant="h5" component="div" sx={{
                        textAlign: 'justify'

                    }}>
                        Best Ecommerce & Digital Marketing course, social media marketing, sales funnels, WordPress website, SEO, Ads, ...
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
                            Por: Ruben Diaz
                        </Typography>

                        <Typography gutterBottom variant="h7" component="div" sx={{
                        textAlign: 'justify'

                        }}>
                            Todos los niveles
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


                            <Button variant='contained' startIcon={<ShoppingCartIcon/>} 
                                >Add
                            </Button>

                            <Fab disabled aria-label="like">
                                <FavoriteIcon />
                            </Fab>
                            <Grid item xs={3}>
                                <Box component='h2'
                                >
                                    $100 USD
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

export default CardCategory;