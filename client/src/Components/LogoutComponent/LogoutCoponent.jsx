import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Alert, Snackbar } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function LogoutComponent({ onClose }) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
      // Llama a la función onClose pasada como prop para cerrar la ventana modal
        onClose();
        };

  const handleAccept = () => {
    // Eliminar las propiedades del Local Storage
        localStorage.removeItem('Token');
        localStorage.removeItem('lastname');
        localStorage.removeItem('name');
        localStorage.removeItem('userType');
        localStorage.removeItem('idUser');
        localStorage.removeItem('myCourses');
        localStorage.removeItem('myRatingCourses');

    // Redireccionar a la página "/", borra los estados de Redux
        window.location.href = '/';
        };

  const handleCancel = () => {
    // Cierra la ventana
        handleClose();
  };


  return (
    <div>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
        <Box sx={style}>

            <Typography id="modal-modal-title" variant="h6" component="h2">
            Cerrar Sesión
            </Typography>

            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Confirme el cierre de sesión.
            </Typography>

            <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
                <Button onClick={handleAccept} sx={{ mr: 2 }}>
                Aceptar
                </Button>

                <Button onClick={handleCancel} variant="outlined">
                Cancelar
                </Button>
            </Box>

        </Box>
      </Modal>
    </div>
  );
}