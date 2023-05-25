import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

function createData(nombredelcurso,fecha, preciototal,factura) {
  return {nombredelcurso, fecha, preciototal, factura };
}

const rows = [
 
  createData('Curso basico de Javascript', "01/01/2020", 16.0 ,<Button variant="outlined" sx={{width:10,height:30}}>Factura</Button>),
  createData('Curso basico de Javascript', "01/01/2020", 16.0, <Button variant="outlined" sx={{width:10,height:30}}>Factura</Button>),
  createData('Curso basico de Javascript', "01/01/2020", 16.0 ,<Button variant="outlined" sx={{width:10,height:30}}>Factura</Button>),
  createData('Curso basico de Javascript', "01/01/2020", 16.0,<Button variant="outlined" sx={{width:10,height:30}}>Factura</Button>),
  createData('Curso basico de Javascript', "01/01/2020", 16.0,<Button variant="outlined" sx={{width:10,height:30}}>Factura</Button>),
  createData('Curso basico de Javascript', "01/01/2020", 16.0,<Button variant="outlined" sx={{width:10,height:30}}>Factura</Button> ),
  createData('Curso basico de Javascript', "01/01/2020", 16.0,<Button variant="outlined" sx={{width:10,height:30}}>Factura</Button>),
 

];

export default function MisCompras() {
  return (
    <TableContainer component={Paper} sx={{ width:800,height:400,marginTop:5 }}>
      <Table sx={{ minWidth: 100, }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre del curos</TableCell>
            <TableCell align="right">Fecha</TableCell>
            <TableCell align="right">Precio total</TableCell>
            <TableCell align="right">Factura</TableCell>
            
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
              <TableCell align="right">{row.preciototal}</TableCell>
              <TableCell align="right">{row.factura}</TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}