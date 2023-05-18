import { Button, Grid, Typography } from "@mui/material";
import { CardCarrito } from "./CardCarrito";
import { useSelector } from "react-redux";



export function Carrito() {

    const car = useSelector((state)=>state.carrito)


  return (
    <Grid container spacing={2}>
        <Grid item xs={9}>
            <Typography align="left" variant="h5" marginBottom={3}>
                Mi carrito
            </Typography>
            <CardCarrito/>

            <Typography align="left" variant="h5" marginY={4}>
                Sugerencias para tí
            </Typography>
        </Grid>

        <Grid item xs={2} marginTop={6}   container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            marginLeft={5}>
            <Typography variant="h5" align="left">
                Total
            </Typography>

            <Typography variant="h5" align="left" marginY={2}>
                $ 100 USD
            </Typography>

            <Button variant="contained" size="large" >
                Pagar
            </Button>
        </Grid>
    </Grid>

  );
};