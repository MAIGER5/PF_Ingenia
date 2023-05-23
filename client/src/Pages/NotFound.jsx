import React from 'react'
import Typography from '@mui/material/Typography'
import { Box, Button, Stack } from '@mui/material'
import { Link } from 'react-router-dom';
export default function NotFound() {
  return (
    <Box sx={{marginTop:15, marginBottom:25}}>
      <Stack
       direction="row"
       justifyContent="center"
       alignItems="center"
       spacing={10}
      >
        
      <Stack
       direction="column"
       justifyContent="center"
       alignItems="center"
       spacing={4}
      >
    
      <Typography variant="h1" color="secondary">Ooops!</Typography>
      <Typography variant="h3" color="secondary">Algo salio mal</Typography>
      
      <Link to="/"><Button variant="contained" color="secondary">
      Ok! Llevame al Home
      </Button></Link>
      </Stack>
          <img 
            src='https://res.cloudinary.com/dvvqbwhcc/image/upload/v1684629753/ingeniaAssets/404_zjbx9s.png' 
            alt='erro_404' 
            width="500" height="500"
            />
   
      </Stack>
    </Box>
  )
}
