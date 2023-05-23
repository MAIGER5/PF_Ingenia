import { Box, Button, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { CardsCarr } from "./CardsCarr";
import Paypalbuton from "../../PayPal/paypalbuton";




export function Carrito() {

    const car = useSelector((state)=>state.allCarrito)

    const sumar = car.reduce((accumulator, ele)=> accumulator + ele.price, 0)


  return (
    <Box>
      
    <Grid container spacing={2} margin={10}>
        <Grid item xs={9}>
            <Typography align="left" variant="h4" marginBottom={3}>
                Mi carrito
            </Typography>
            <CardsCarr/>

            <Typography align="left" variant="h5" marginY={4}>
                Sugerencias para tí
            </Typography>
        </Grid>

        <Grid item xs={2} marginTop={6}   container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            marginLeft={5}>
            <Typography variant="h3" align="left">
                Total
            </Typography>

            <Typography variant="h4" align="left" marginY={2}>
               $ {sumar.toLocaleString()} USD
            </Typography>
            <Paypalbuton/>
            
        </Grid>
    </Grid>
    </Box>
  );
};