import * as React from 'react';
import Card from '@mui/material/Card';


import Typography from '@mui/material/Typography';
import { Avatar, Stack } from '@mui/material';



function CardComentshome() {
  return (
    <Card sx={{width:400}}>
       
       <Stack
       direction="row"
       justifyContent="center"
       alignItems="center"
       spacing={2}
       >
        <Avatar sx={{ bgcolor: "#e91e63" }}>G</Avatar>
        <Stack>
        <Typography gutterBottom variant="h5" component="div">
        Crea una página en Next
                </Typography>

                <Typography gutterBottom variant="h8" component="div">
                Por: Giselle
                </Typography>
        </Stack>
         
       </Stack>

    </Card>
  );
};

export default CardComentshome;