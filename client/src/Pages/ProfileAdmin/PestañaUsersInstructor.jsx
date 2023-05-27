import React, { useState } from 'react';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { useSelector } from "react-redux";

export const PestañaUsersInstructor = () => {

    const instructs = useSelector((state)=> state.instructor);

    const [pg, setpg] = useState(0);
    const [rpg, setrpg] = useState(5);
  
    function handleChangePage(event, newpage) {
        setpg(newpage);
    }
  
    function handleChangeRowsPerPage(event) {
        setrpg(parseInt(event.target.value, 10));
        setpg(0);
    }

    return (
        <Paper>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="caption table">
                    <caption>A basic table example with a caption</caption>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id User</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="center">Tipo Usuario</TableCell>
                            <TableCell align="center">Calificación</TableCell>
                            <TableCell align="right">Fecha de Alta</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {instructs.data?.slice(pg * rpg, pg * rpg + rpg).map((row) => (
                            <TableRow key={row.idUser}>
                                <TableCell align="left">{row.idUser}</TableCell>
                                <TableCell component="th" scope="row">
                                    {row.name} {row.lastname}
                                </TableCell>
                                <TableCell align="left">{row.email}</TableCell>
                                <TableCell align="center">{row.Is}</TableCell>
                                <TableCell align="center"> {row.assessment} </TableCell>
                                <TableCell align="right">{row.createdAt}</TableCell>
                                <Button sx={{marginBottom:'10px', marginRight:'10px'}}>Pausar</Button>
                                <MailOutlineIcon  sx={{marginTop:'20px', marginRight:'20px'}}/>
                                <DeleteForeverOutlinedIcon  sx={{marginTop:'20px'}}/>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination sx={{width:'100%', display:'flex', justifyContent:'center'}}
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={instructs.data?.length}
                rowsPerPage={rpg}
                page={pg}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    )
}
