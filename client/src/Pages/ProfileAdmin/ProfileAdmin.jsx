import React from 'react'
import { Button, Divider, Grid, List, ListItem, ListItemText, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, styled } from '@mui/material'
import { useSelector } from 'react-redux';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';



export const ProfileAdmin = () => {

    const cursos = useSelector((state)=> state.allCourse);

    return (
        <Grid marginLeft={20} marginRight={15}>
            <Typography variant='h4' align='left' marginLeft={1}>Admin</Typography>
            <Typography variant='h4' align='left' marginLeft={1}>Ingenia</Typography>

            <Grid container spacing={2} >
                <Grid marginTop={8} marginRight={15} item xs={1.5}>
                    <List component="nav" aria-label="mailbox folders">
                        <ListItem button>
                            <ListItemText primary="Cursos Publicados" />
                        </ListItem>
                        <Divider />
                        <ListItem button divider>
                            <ListItemText primary="Articulos" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Controversias" />
                        </ListItem>
                        <Divider light />
                        <ListItem button>
                            <ListItemText primary="Facturas" />
                        </ListItem>
                        <Divider light />
                        <ListItem button>
                            <ListItemText primary="Cerrar sesión" />
                        </ListItem>
                    </List>
                </Grid>

                <Grid item xs={9} marginTop={9}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="caption table">
                            <caption>A basic table example with a caption</caption>
                            <TableHead>
                                <TableRow>
                                    <TableCell>idCourse</TableCell>
                                    <TableCell>Title_Course</TableCell>
                                    <TableCell align="left">Instructor</TableCell>
                                    <TableCell align="center">Fecha</TableCell>
                                    <TableCell align="center">Status</TableCell>
                                    <TableCell align="right">promo</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {cursos.map((row) => (
                                    <TableRow key={row.idCourse}>
                                        <TableCell align="left">{row.idCourse}</TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.title}
                                        </TableCell>
                                        <TableCell align="left">{row.Users[0]?.name}</TableCell>
                                        <TableCell align="center">{row.createdAt}</TableCell>
                                        <TableCell align="center"> {row.asset === true? "Vigente": "Pausado"} </TableCell>
                                        <TableCell align="right">{row.asset === true? "Si": "No"}</TableCell>
                                        <Button sx={{marginBottom:'10px', marginRight:'10px'}}>Pausar</Button>
                                        <MailOutlineIcon  sx={{marginTop:'20px', marginRight:'20px'}}/>
                                        <DeleteForeverOutlinedIcon  sx={{marginTop:'20px'}}/>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Grid>
    )
}
