import * as React from 'react';
import Card from '@mui/material/Card';


import Typography from '@mui/material/Typography';
import { Avatar, Stack } from '@mui/material';



function CardComentshome({name, lastName, articulo, articulo1 }) {
  return (
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
          {articulo}
        </Typography>

                <Typography gutterBottom variant="h8" component="div" align='left'>
                  Por: {name} {lastName}
                </Typography>
        </Stack>
         
       </Stack>

    </Card>
  );
};

export default CardComentshome;