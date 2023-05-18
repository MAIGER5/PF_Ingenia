import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, Grid, Rating, makeStyles } from '@mui/material';
import Fab from '@mui/material/Fab';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector } from 'react-redux';



export function CardsDetail({}) {

    const curses = useSelector((state)=> state.courseDetail)
  
    return (

    <Card sx={{ 
        display: 'flex',
        alignItems: 'center',
        }}
        >
        <CardMedia
          sx={{ height: 300, width: 600}}
          component='img'
        //   image= {curses.image}
          title="imagen de curso"
        />

        <CardContent>
            <Grid container spacing={0}
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                marginLeft={5}
                padding={1} >

                <Grid >
                    <Typography gutterBottom variant="h3" component="h3" sx={{
                        textAlign: 'justify'

                    }}>
                        {/* {curses.title} */}
                    </Typography>

                    <Typography gutterBottom variant="h8" component="div" sx={{
                        textAlign: 'justify'
                    }}>
                        {/* {curses.description} */}
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
                            {/* Por: {curses.users?.name} {curses.users?.lastname} */}
                        </Typography>

                        <Typography gutterBottom variant="h8" component="div" sx={{
                        textAlign: 'justify'

                        }}>
                            {curses.lenguage}
                        </Typography>
                        
                        <Grid width={600}
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="baseline"
                        >
                            <Grid>
                                <Rating name="half-rating" defaultValue={2.5} precision={0.5} size='large' />
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
                                    {/* {curses.price} */}
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

export default CardsDetail;
