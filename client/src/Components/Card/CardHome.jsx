import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, Rating } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function CardHome({title,imgCurso,instructor,price,ratings}) {
 
 
  return (
    <Card sx={{ 
      transition: '0.2s', 
      '&:hover': {
        transform: 'scale(1.05)'
      }, 
      maxWidth: 380,
      height:450
    }}
    >
      <CardActionArea>
        <CardMedia
          sx={{ height: 190 }}
          component='img'
          image={imgCurso}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {instructor}
          </Typography>
        </CardContent>
        <Rating name="read-only" value={ratings} readOnly sx={{ color: "#e91e63" }} />
        <CardActions>
          <Button variant='contained' startIcon={<ShoppingCartIcon/>} 
          >Add
          </Button>
        </CardActions>
        <Box component='h3'>
         ${price}
        </Box>

      </CardActionArea>
    </Card>
  );
};

export default CardHome;