import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, Grid, Rating } from '@mui/material';
import { makeStyles } from '@mui/material';
import Fab from '@mui/material/Fab';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useParams } from 'react-router-dom';
import { addToCarrito } from '../../Redux/Actions/actionsCarrito/addToCarrito';
import Login from '../../Pages/Login/Login';



export function CardsDetail({}) {
    
    const curses = useSelector((state)=> state.courseDetail)
    const {id} = useParams();
    const dispatch = useDispatch();

    const [mostrarLogin, setmostrarLogin] = React.useState(false);

    function handleclick(){
        localStorage.getItem('name')? dispatch(addToCarrito(id)): setmostrarLogin(true);
        mostrarLogin? <Login/> : "nada"
    }
  
    return (

    <Card sx={{ 
        display: 'flex',
        alignItems: 'center',
        }}
        >
        <CardMedia
          sx={{ height: 300, width: 700}}
          component='img'
          image= {curses.image}
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
                        {curses.title}
                    </Typography>

                    <Typography gutterBottom variant="h8" component="div" sx={{
                        textAlign: 'justify'
                    }}>
                        {curses.description}
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
                            Por: {curses.users?.name} {curses.users?.lastname}
                        </Typography>

                        <Typography gutterBottom variant="h8" component="div" sx={{
                        textAlign: 'justify'

                        }}>
                            {/* {curses.lenguage} */}
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

                            {/* component={Link} to={'/SignupUsuario'} */}

                            <Button onClick={handleclick} variant='contained' startIcon={<ShoppingCartIcon/>} 
                                >Add
                            </Button>
                            {mostrarLogin && <Login />}

                            <Fab disabled aria-label="like">
                                <FavoriteIcon />
                            </Fab>
                            <Grid item xs={4.5}>
                                <Box component='h2'
                                >
                                   $ {curses.price} USD
                                </Box>
                            </Grid>
                        </Grid>

                        <Grid width={600}
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="normal">
                                <Grid>
                                    <Button variant="text"  sx={{backgroundColor:"#E53170", color: 'black'}} > {curses.dificulty}  </Button>
                                </Grid>
                                <Grid marginX={1}>
                                    <Button marginLeft='2' sx={{backgroundColor:"#E53170", color: 'black'}}> {curses.lenguage} </Button>
                                </Grid>
                                <Grid>
                                    <Button  sx={{backgroundColor:"#E53170", color: 'black'}}> {curses.categories} </Button>
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
