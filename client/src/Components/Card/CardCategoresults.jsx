import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, Grid, Rating } from '@mui/material';
import Fab from '@mui/material/Fab';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';


function CardCategoresults({title, description, dificulty, duration, price, image, lenguage}) {
   
  return (
    <Card sx={{ 
        display: 'flex',
        alignItems: 'center',
        width:1500
        }}
        >
        <CardMedia
          sx={{ height: 300, width:400}}
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
                    <Typography gutterBottom variant="h4" component="div"  sx={{
                        textAlign: 'justify'

                    }}>
                        {title}
                    </Typography>

                    <Typography gutterBottom variant="body1" component="div" sx={{
                        textAlign: 'justify'

                    }}>
                       {description}
                    </Typography>
                </Grid>

                <Grid   container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start">
                        
                    <Grid item xs={8}>
                        <Typography variant="body2" color="text.Primary" sx={{
                            textAlign: 'justify'

                        }}>
                           {dificulty}
                        </Typography>

                        <Typography gutterBottom variant="body1" component="div" sx={{
                        textAlign: 'justify'

                        }}>
                            {lenguage}
                        </Typography>
                        
                        <Grid width={600}
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="baseline"
                        >
                            <Grid>
                                <Rating name="half-rating" size="large" value={duration}
                                color='#E53170' />
                            </Grid>


                            <Button variant='contained' startIcon={<ShoppingCartIcon/>} 
                                >Add
                            </Button>

                            <Fab disabled aria-label="like">
                                <FavoriteIcon />
                            </Fab>
                            <Grid item xs={3}>
                                <Box component='body1'
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

export default CardCategoresults;