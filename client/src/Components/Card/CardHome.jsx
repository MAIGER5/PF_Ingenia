import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, Rating } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';


function CardHome({title, image, instructor, price, ratings, idCourse}) {
 
 
  return (

    <Link to={`/DetailCourse/${idCourse}`}>
      <Card sx={{ 
        transition: '0.2s', 
        '&:hover': {
          transform: 'scale(1.05)'
        }, 
        maxWidth: 380,
        height:450
      }}
      >
        {/* <Link to={`/CoureseDetail/${id}`} > */}
          <CardActionArea >
            <CardMedia
              sx={{ height: 190 }}
              component='img'

              image={image}
              title="xxxxx"

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
        {/* </Link> */}
      </Card>
    </Link>
  );
};

export default CardHome;