import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, Grid, Rating } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';


function CardHome({title, image, instructorName, instructorLastName, price, lenguage, ratings, idCourse}) {
 
 
  return (

    <Link to={`/DetailCourse/${idCourse}`}>
      <Card sx={{ 
        transition: '0.2s', 
        '&:hover': {
          transform: 'scale(1.05)'
        }, 
        maxWidth: 380,
        height:450,
      }}
      >
          <CardActionArea >
            <CardMedia
              sx={{ height: 210 }}
              component='img'

              image={image}
              title="xxxxx"

            />

            <CardContent>
              <Grid   container
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Typography align='left' gutterBottom variant="h5" component="div">
                {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Instructor: {instructorLastName} {instructorName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Idioma: {lenguage}
                </Typography>
                <Rating name="read-only" value={ratings} readOnly sx={{ color: "#e91e63" }} />
              </Grid>
            </CardContent>



            <CardActions>
              <Button variant='contained' startIcon={<ShoppingCartIcon/>} 
              >Add
              </Button>
            </CardActions>
            <Box component='h2'>
            ${price} USD
            </Box>

          </CardActionArea>
      </Card>
    </Link>
  );
};

export default CardHome;