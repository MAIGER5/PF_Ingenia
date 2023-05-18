
export function CardCarrito() {
  return (
    <Card sx={{ 
        display: 'flex',
        alignItems: 'center',
        }}
        >
        <CardMedia
          sx={{ height: 300, width: 600}}
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
                            {curses.dificulty}
                        </Typography>

                        <Typography gutterBottom variant="h8" component="div" sx={{
                        textAlign: 'justify'

                        }}>
                            {curses.dificulty}
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


                            <Button variant='contained' startIcon={<ShoppingCartIcon/>} 
                                >Add
                            </Button>

                            <Fab disabled aria-label="like">
                                <FavoriteIcon />
                            </Fab>
                            <Grid item xs={3}>
                                <Box component='h2'
                                >
                                    {curses.price}
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
  );
};