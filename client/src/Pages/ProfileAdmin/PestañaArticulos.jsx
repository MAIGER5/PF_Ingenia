import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { useSelector } from "react-redux";
import { useState } from "react";

export const PestañaArticulos = () => {

    const artiuculs = useSelector((state)=> state.articulos);

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
                            <TableCell>Id Publicación</TableCell>
                            <TableCell>Id Usuario</TableCell>
                            <TableCell align="left">Title</TableCell>
                            <TableCell align="center">Fecha</TableCell>
                            <TableCell align="center">Status</TableCell>
                            <TableCell align="right">Actualizado</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {artiuculs?.slice(pg * rpg, pg * rpg + rpg).map((row) => (
                            <TableRow key={row.idPublications}>
                                <TableCell align="left">{row.idPublications}</TableCell>
                                <TableCell component="th" scope="row">
                                    {row.UserIdUser}
                                </TableCell>
                                <TableCell align="left">{row.title}</TableCell>
                                <TableCell align="center">{row.createdAt}</TableCell>
                                <TableCell align="center"> {row.asset === true? "Vigente": "Pausado"} </TableCell>
                                <TableCell align="right">{row.updatedAt}</TableCell>
                                <Button sx={{marginBottom:'10px', marginRight:'10px'}}>Pausar</Button>
                                {/* <MailOutlineIcon  sx={{marginTop:'20px', marginRight:'20px'}}/> */}
                                {/* <DeleteForeverOutlinedIcon  sx={{marginTop:'20px'}}/> */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
                <TablePagination sx={{width:'100%', display:'flex', justifyContent:'center'}}
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={artiuculs?.length}
                rowsPerPage={rpg}
                page={pg}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    )
}
