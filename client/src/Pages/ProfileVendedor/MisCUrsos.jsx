import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {  Button, TablePagination } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


export default function MisCompras() {
    const [miscompras, setcompras] = useState([]);
    const idUser = localStorage.getItem("idUser");
    const dispatch = useDispatch();
    console.log(miscompras)
    useEffect(() => {
      fetch(`https://pfingenia-production.up.railway.app/instructor/publication/${idUser}`)
        .then(response => response.json())
        .then(response => {
          setcompras(response);
         
        })
        .catch(err => console.error(err));
    }, [dispatch, idUser]);
  
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
                  <caption> tus cursos</caption>
                  <TableHead>
                      <TableRow>
                          <TableCell>nombre del curso</TableCell>
                          <TableCell>vigencia</TableCell>
                          <TableCell align="left">fecha</TableCell>
                          <TableCell align="left">borrar</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {miscompras?.slice(pg * rpg, pg * rpg + rpg).map((row) => (
                          <TableRow key={row.idCourse}>
                              <TableCell align="left">{row.title}</TableCell>

                              {row.asset===true?<TableCell component="th" scope="row">
                                  vigente
                              </TableCell>:<TableCell component="th" scope="row">
                                  vencido
                              </TableCell>}
                              
                              <TableCell align="left">{row.createdAt}</TableCell>
                              <TableCell align="center">{row.dificulty}</TableCell>
                              
                              
                             
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
              count={miscompras?.length}
              rowsPerPage={rpg}
              page={pg}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
          />
      </Paper>
  )}
