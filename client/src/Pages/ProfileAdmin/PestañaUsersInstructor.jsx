// import React from 'react';
// import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
// import { useSelector } from "react-redux";

// export const PestañaUsersInstructor = () => {

//     const artiuculs = useSelector((state)=> state.articulos);

//     return (
//         <TableContainer component={Paper}>
//             <Table sx={{ minWidth: 650 }} aria-label="caption table">
//                 <caption>A basic table example with a caption</caption>
//                 <TableHead>
//                     <TableRow>
//                         <TableCell>Id Publicación</TableCell>
//                         <TableCell>Id Usuario</TableCell>
//                         <TableCell align="left">Title</TableCell>
//                         <TableCell align="center">Fecha</TableCell>
//                         <TableCell align="center">Status</TableCell>
//                         <TableCell align="right">Actualizado</TableCell>
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     {artiuculs.data.map((row) => (
//                         <TableRow key={row.idPublications}>
//                             <TableCell align="left">{row.idPublications}</TableCell>
//                             <TableCell component="th" scope="row">
//                                 {row.UserIdUser}
//                             </TableCell>
//                             <TableCell align="left">{row.title}</TableCell>
//                             <TableCell align="center">{row.createdAt}</TableCell>
//                             <TableCell align="center"> {row.asset === true? "Vigente": "Pausado"} </TableCell>
//                             <TableCell align="right">{row.updatedAt}</TableCell>
//                             <Button sx={{marginBottom:'10px', marginRight:'10px'}}>Pausar</Button>
//                             <MailOutlineIcon  sx={{marginTop:'20px', marginRight:'20px'}}/>
//                             <DeleteForeverOutlinedIcon  sx={{marginTop:'20px'}}/>
//                         </TableRow>
//                     ))}
//                 </TableBody>
//             </Table>
//         </TableContainer>
//     )
// }
