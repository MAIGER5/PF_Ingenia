import React, { useState } from "react";
import { Box, Button, Dialog, DialogContent, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from "react-redux";
import { PusarCurso } from "../../Redux/Actions/BorradoLogico/PusarCurso";
import { Link } from "react-router-dom";



export const PestañaCursosPublicados = () => {

    const cursos = useSelector((state)=> state.allCourse);

    const dispatch = useDispatch();

    const [pg, setpg] = React.useState(0);
    const [rpg, setrpg] = React.useState(5);
    
    const [boxEmerg, SetBoxEmerg] = useState(false);
    
    function handleChangePage(event, newpage) {
        setpg(newpage);
    }
  
    function handleChangeRowsPerPage(event) {
        setrpg(parseInt(event.target.value, 10));
        setpg(0);
    }

    function handlePausClick(idCourse) {
        SetBoxEmerg(true);
        dispatch(PusarCurso(idCourse))
        
        
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
                            <TableCell>IdCourse</TableCell>
                            <TableCell>Title_Course</TableCell>
                            <TableCell align="left">Instructor</TableCell>
                            <TableCell align="center">Fecha</TableCell>
                            <TableCell align="center">Status</TableCell>
                            <TableCell align="right">Promo</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cursos.slice(pg * rpg, pg * rpg + rpg).map((row) => (
                            <TableRow key={row.idCourse}>
                                <TableCell align="left">{row.idCourse}</TableCell>
                                <TableCell component="th" scope="row">
                                    <Link  to = {`/DetailCourse/${row.idCourse}`} style={{ textDecoration: 'none' }}> 
                                        <Typography variant="body1" color={'secondary'}>
                                            {row.title}
                                        </Typography>
                                    </Link> 
                                </TableCell>
                                <TableCell align="left"> {row.Users[0]?.name} {row.Users[0]?.lastname}</TableCell>
                                <TableCell align="center">{row.createdAt}</TableCell>
                                <TableCell align="center"> {row.asset === true? "Vigente": <Typography color={"aqua"}>Pausado</Typography> } </TableCell>
                                <TableCell align="right">{row.asset === true? "Si": "No"}</TableCell>
                                <Button onClick={()=>handlePausClick(row.idCourse)}  variant="outlined" sx={{marginBottom:'10px', marginRight:'10px'}}>  {row.asset === true? "Pausar": <Typography color={"aqua"}>Activar</Typography>}  </Button>

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


                                {/* {boxEmerg && <Box width={400} border={1} borderColor={"aqua"}>  <Typography>hola vamos a pausar</Typography> </Box>} */}
                                
                                {/* <MailOutlineIcon  sx={{marginTop:'20px', marginRight:'20px'}}/>
                                <DeleteForeverOutlinedIcon  sx={{marginTop:'20px'}}/> */}