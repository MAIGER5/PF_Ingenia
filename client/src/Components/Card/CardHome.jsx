import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, Rating } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function CardHome() {
  return (
    <Card sx={{ 
      transition: '0.2s', 
      '&:hover': {
        transform: 'scale(1.05)'
      }, 
      maxWidth: 380
    }}
    >
      <CardActionArea>
        <CardMedia
          sx={{ height: 300 }}
          component='img'
          image="./Image/maxresdefault.jpg"
          title="imagen del curso"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Ecommerce & Marketing course: Agency, Marketer
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Por: Ruben Diaz
          </Typography>
        </CardContent>
        
        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        <CardActions>
          <Button variant='contained' startIcon={<ShoppingCartIcon/>} 
          >Add
          </Button>
        </CardActions>
        <Box component='h3'>
          $100 USD
        </Box>

      </CardActionArea>
    </Card>
  );
};

export default CardHome;