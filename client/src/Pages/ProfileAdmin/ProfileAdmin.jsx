import React, { useEffect, useState } from 'react'
import { Divider, Grid, List, ListItemButton, ListItemText, Typography, styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { PestañaCursosPublicados } from './PestañaCursosPublicados';
import { getArticulos } from '../../Redux/actionsProfileAdmin/getArticulos';
import { PestañaArticulos } from './PestañaArticulos';
import { getFacturas } from '../../Redux/actionsProfileAdmin/getFacturas';
import { PestañaFacturas } from './PestañaFacturas';
import { getInstructorUser } from '../../Redux/actionsProfileAdmin/getInstructorUser';
import { PestañaUsersInstructor } from './PestañaUsersInstructor';



export const ProfileAdmin = () => {

    const dispatch = useDispatch();

    const cursos = useSelector((state)=> state.allCourse);

    const [selectedIndex, setSelectedIndex] = useState(1)

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };


    useEffect(() => {
        dispatch(getArticulos())
        dispatch(getFacturas())
        dispatch(getInstructorUser())
    }, [])


    return (
        <Grid marginLeft={20} marginRight={15}>
            <Typography variant='h4' align='left' marginLeft={1}>Admin</Typography>
            <Typography variant='h4' align='left' marginLeft={1}>Ingenia</Typography>

            <Grid container spacing={2} >
                <Grid marginTop={8} marginRight={15} item xs={1.5}>
                    <List component="nav" aria-label="mailbox folders">
                        <ListItemButton selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 0)}>
                            <ListItemText primary="Cursos Publicados" />
                        </ListItemButton>
                        <Divider />
                        <ListItemButton selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 1)} divider>
                            <ListItemText primary="Articulos" />
                        </ListItemButton>
                        <ListItemButton selected={selectedIndex === 2} onClick={(event) => handleListItemClick(event, 2)}>
                            <ListItemText primary="Usuarios e Instructores" />
                        </ListItemButton>
                        <Divider light />
                        <ListItemButton selected={selectedIndex === 3} onClick={(event) => handleListItemClick(event, 3)}>
                            <ListItemText primary="Facturas" />
                        </ListItemButton>
                        <Divider light />
                        <ListItemButton selected={selectedIndex === 4} onClick={(event) => handleListItemClick(event, 4)}>
                            <ListItemText primary="Cerrar sesión" />
                        </ListItemButton>
                    </List>
                </Grid>

                <Grid item xs={9} marginTop={9}> 
                    {selectedIndex == 0? <PestañaCursosPublicados/> : selectedIndex == 1? <PestañaArticulos/> : selectedIndex == 3? <PestañaFacturas/> : <PestañaUsersInstructor/> } 
                </Grid>
            </Grid>
        </Grid>
    )
}
