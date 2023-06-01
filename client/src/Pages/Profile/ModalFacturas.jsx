import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Divider } from '@mui/material';


export default function Modalfactura() {
  const [open, setOpen] = React.useState(false);
  const [info,setinfo]=React.useState([])
  const idUser=localStorage.getItem("idUser")
  console.log(info)
  React.useEffect(()=>{
    fetch(`https://pfingenia-production.up.railway.app/user/myBills/${idUser}`)
    .then(response => response.json())
    .then(response => setinfo(response))
    .catch(err => console.error(err));
  },
  [])
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        tus facturas 
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"tus facturas actuales son"}
        </DialogTitle>
        <DialogContent>
        {info.map((factura) => (
  <React.Fragment key={factura.idBill}>
    <DialogContentText id="alert-dialog-description">
     numero de factura: {factura.idBill} USD
    </DialogContentText>
    <DialogContentText id="alert-dialog-description">
     por un precio de $ {factura.total_billed} 
    </DialogContentText>
    
    <Divider  sx={{background:"black"}}/>
  </React.Fragment>
))}
         
         
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cerrar</Button>
          
        </DialogActions>
      </Dialog>
    </div>
  );
}