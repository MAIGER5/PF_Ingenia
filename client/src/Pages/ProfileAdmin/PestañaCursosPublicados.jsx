import React, { useState } from "react";
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useSelector } from "react-redux";



export const PestañaCursosPublicados = () => {

    const cursos = useSelector((state)=> state.allCourse);

    const [pg, setpg] = React.useState(0);
    const [rpg, setrpg] = React.useState(5);
  
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
                            <TableCell>IdCourse</TableCell>
                            <TableCell>Title_Course</TableCell>
                            <TableCell align="left">Instructor</TableCell>
                            <TableCell align="center">Fecha</TableCell>
                            <TableCell align="center">Status</TableCell>
                            <TableCell align="right">promo</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cursos.slice(pg * rpg, pg * rpg + rpg).map((row) => (
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
            <TablePagination sx={{width:'100%', display:'flex', justifyContent:'center'}}
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={cursos.length}
                rowsPerPage={rpg}
                page={pg}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    )
}
