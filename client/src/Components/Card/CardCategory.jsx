import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, Grid, Hidden, Rating } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function CardCategory() {
  return (
    <Card sx={{ 
        display: 'flex',
        alignItems: 'center',
        // gap: 2,

        }}
        >
        <CardMedia
          sx={{ height: 300 }}
          component='img'
          image="./Image/maxresdefault.jpg"
          title="green iguana"
        />
        <Grid container spacing={2} >
            <Grid item xs={8} >
                <Typography gutterBottom variant="h5" component="div">
                Ecommerce & Marketing course: Agency, Marketer
                </Typography>

                <Typography gutterBottom variant="h8" component="div">
                Best Ecommerce & Digital Marketing course, social media marketing, sales funnels, WordPress website, SEO, Ads, ...
                </Typography>
            </Grid>

            <Grid item xs={4} >
                <Box component='h3'>
                $100 USD
                </Box>
            </Grid>

            <Grid item xs={8} >
                <Typography variant="body2" color="text.secondary">
                    Creado Por: Ruben Diaz
                </Typography>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            </Grid>

            <Grid item xs={4} >
                <Button variant='contained' startIcon={<ShoppingCartIcon/>} 
                >Add
                </Button>
            </Grid>

        </Grid>

    </Card>
  );
};

export default CardCategory;