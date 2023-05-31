import * as React from 'react';
import Card from '@mui/material/Card';


import Typography from '@mui/material/Typography';
import { Avatar, Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';



function CardComentshome({name, lastName, articulo, articulo1, idPublications, title }) {
  return (
    <NavLink to={`/Article/${idPublications}`} style={{ textDecoration: 'none' }} >
      <Card sx={{width:'100%', display:'flex', justifyContent:'left'}}>
        
        <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        >
          <Avatar sx={{ bgcolor: "#e91e63", marginLeft:'20px' }}> {Array.from(name).shift()} </Avatar>
          <Stack>
          <Typography gutterBottom variant="h5" component="div" align='center'>
            {title}
          </Typography>

                  <Typography gutterBottom variant="h8" component="div" align='left'>
                    Por: {name} {lastName}
                  </Typography>
          </Stack>
          
        </Stack>

      </Card>
    </NavLink>
  );
};

export default CardComentshome;