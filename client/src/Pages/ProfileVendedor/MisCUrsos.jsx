import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, IconButton } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function createData(nombredelcurso,fecha, estatus,editar,eliminar) {
  return {nombredelcurso, fecha, estatus, editar,eliminar };
}

const rows = [
 
  createData('Curso basico de Javascript', "01/01/2020", "vigente" ,<Button variant="outlined" sx={{width:10,height:30}}>Editar</Button>,<IconButton><DeleteForeverIcon color='primary'/></IconButton>),
  createData('Curso basico de Javascript', "01/01/2020", "vigente", <Button variant="outlined" sx={{width:10,height:30}}>Editar</Button>,<IconButton><DeleteForeverIcon color='primary'/></IconButton>),
  createData('Curso basico de Javascript', "01/01/2020", "vigente" ,<Button variant="outlined" sx={{width:10,height:30}}>Editar</Button>,<IconButton><DeleteForeverIcon color='primary'/></IconButton>),
  createData('Curso basico de Javascript', "01/01/2020", "vigente",<Button variant="outlined" sx={{width:10,height:30}}>Editar</Button>,<IconButton><DeleteForeverIcon color='primary'/></IconButton>),
  createData('Curso basico de Javascript', "01/01/2020", "vigente",<Button variant="outlined" sx={{width:10,height:30}}>Editar</Button>,<IconButton><DeleteForeverIcon color='primary'/></IconButton>),
  createData('Curso basico de Javascript', "01/01/2020", "vigente",<Button variant="outlined" sx={{width:10,height:30}}>Editar</Button> ,<IconButton><DeleteForeverIcon color='primary'/></IconButton>),
  createData('Curso basico de Javascript', "01/01/2020", "vigente",<Button variant="outlined" sx={{width:10,height:30}}>Editar</Button>,<IconButton><DeleteForeverIcon color='primary'/></IconButton>),
 

];

export default function MisCUrsos () {
  return (
    <TableContainer component={Paper} sx={{ width:800,height:400 ,marginTop:5}}>
      <Table sx={{ minWidth: 100, }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre del curos</TableCell>
            <TableCell align="right">Fecha</TableCell>
            <TableCell align="right">estatus</TableCell>
            <TableCell align="right">Editar</TableCell>
            <TableCell align="right">Eliminar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={Math.random()}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.nombredelcurso}
              </TableCell>
              <TableCell align="right">{row.fecha}</TableCell>
              <TableCell align="right">{row.estatus}</TableCell>
              <TableCell align="right">{row.editar}</TableCell>
              <TableCell align="right">{row.eliminar}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}