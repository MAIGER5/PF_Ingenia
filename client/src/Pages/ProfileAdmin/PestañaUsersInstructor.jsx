import React, { useState } from 'react';
import { Button, Dialog, DialogContent, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { useDispatch, useSelector } from "react-redux";
import { PausarUserOInstructor } from '../../Redux/Actions/BorradoLogico/PausarUserOInstructor';

export const PestañaUsersInstructor = () => {

    const instructs = useSelector((state)=> state.instructor);

    const dispatch = useDispatch();

    const [pg, setpg] = useState(0);
    const [rpg, setrpg] = useState(5);

    const [boxEmerg, SetBoxEmerg] = useState(false);

  
    function handleChangePage(event, newpage) {
        setpg(newpage);
    }
  
    function handleChangeRowsPerPage(event) {
        setrpg(parseInt(event.target.value, 10));
        setpg(0);
    }

    function handlePausClick(idUser) {
        SetBoxEmerg(true);
        dispatch(PausarUserOInstructor(idUser))
        
        
    }

    function handleClose() {
        SetBoxEmerg(false);
        window.location.reload();
        
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
                            <TableCell align="center">Estado</TableCell>
                            <TableCell align="center">Fecha de Alta</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {instructs?.slice(pg * rpg, pg * rpg + rpg).map((row) => (
                            <TableRow key={row.idUser}>
                                <TableCell align="left">{row.idUser}</TableCell>
                                <TableCell component="th" scope="row">
                                    {row.name} {row.lastname}
                                </TableCell>
                                <TableCell align="left">{row.email}</TableCell>
                                <TableCell align="center">{row.Is}</TableCell>
                                <TableCell align="center"> {row.assessment} </TableCell>
                                <TableCell align="center"> {row.asset === true? "Vigente☺": <Typography color={"aqua"}>Pausado</Typography> } </TableCell>
                                <TableCell align="right">{row.createdAt}</TableCell>
                                <Button onClick={()=>handlePausClick(row.idUser)}  variant="outlined" sx={{marginBottom:'10px', marginRight:'10px'}}>  {row.asset === true? "Pausar": <Typography color={"aqua"}>Activar</Typography>}  </Button>
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
                count={instructs?.length}
                rowsPerPage={rpg}
                page={pg}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            <Dialog onClose={handleClose} open={boxEmerg} maxWidth="md" PaperProps={{ sx: { width: '400px', height:'190', maxWidth: 'none' }}} >
                <DialogContent>
                    <Typography align="center" variant="h5" marginBottom={5}>Confirmación de cambio de Estado</Typography>
                    <Typography align="center" variant="body1">Pausado/Activado con exito</Typography>
                    <Button onClick={handleClose} variant="contained" sx={{ marginLeft: '140px', marginTop:'40px'}}>Finalizar</Button>
                </DialogContent>
            </Dialog>
        </Paper>
    )
}
