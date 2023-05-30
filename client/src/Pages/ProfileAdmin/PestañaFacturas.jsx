import React, { useState } from 'react';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { useSelector } from "react-redux";

export const PestañaFacturas = () => {
    
    const facturs = useSelector((state)=> state.facturas);

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
                            <TableCell>Id Bill</TableCell>
                            <TableCell>Email Paypal</TableCell>
                            <TableCell align="left">Id Usuario</TableCell>
                            <TableCell align="center">Name Paypal</TableCell>
                            <TableCell align="center">Total Billed</TableCell>
                            <TableCell align="right">Fecha</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {facturs?.slice(pg * rpg, pg * rpg + rpg).map((row) => (
                            <TableRow key={row.idBill}>
                                <TableCell align="left">{row.idBill}</TableCell>
                                <TableCell component="th" scope="row">
                                    {row.email_paypal}
                                </TableCell>
                                <TableCell align="left">{row.UserIdUser}</TableCell>
                                <TableCell align="center">{row.name_paypal}</TableCell>
                                <TableCell align="center"> {row.total_billed} </TableCell>
                                <TableCell align="right">{row.createdAt}</TableCell>
                                <Button sx={{marginBottom:'10px', marginRight:'10px'}}>Pausar</Button>
                                {/* <MailOutlineIcon  sx={{marginTop:'20px', marginRight:'20px'}}/>
                                <DeleteForeverOutlinedIcon  sx={{marginTop:'20px'}}/> */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination sx={{width:'100%', display:'flex', justifyContent:'center'}}
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={facturs?.length}
                rowsPerPage={rpg}
                page={pg}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    )
}
