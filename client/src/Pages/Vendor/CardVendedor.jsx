import { Avatar, Grid, Rating, Typography } from "@mui/material"


export const CardVendedor = () => {
  return (
    <Grid border={0} marginRight={15}>
        <Typography variant="h2" align="left" marginLeft={20}> Daniel Díaz</Typography>

        <Grid container
                direction="row"
                justifyContent="space-around"
                alignItems="flex-start"
                className='interno dos'
                marginTop={5}
                maxHeight={300}
                border={0}>
            <Grid item xs={0}
                border={0}
                marginLeft={15}
            >
                <Grid marginBottom={2}>
                    <Avatar 
                        sx={{ bgcolor: '#E53170',
                        width: 120, 
                        height: 120}}
                    >
                        <Typography variant="h3">D</Typography>
                    </Avatar>
                </Grid>
                <Rating 
                    name="half-rating" 
                    size="large" 
                    defaultValue={2.5} 
                    precision={0.5} />
            </Grid>
            <Grid item xs={9} border={0}>
                <Typography variant="h5" align="left">
                    Aqui va la descripcion del profesor, todas sus habiliddes , destrezas, cursos, profesiones, experincias, proyectros y demas informacion relevante para describir al instructor de una menra clara para dar la mejor experiencia de usuario 
                </Typography>
                <Typography variant="body1" marginTop={5} align="left">
                    Estudios: Profesionales van en este apartado, se describiran de una manera muy especifica
                </Typography>
            </Grid>
        </Grid>
    </Grid>
  )
}
