import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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

export function ModalWindow ({ textModal, onClose }) {
    // Estado:
        const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        // Cambio estado para cerrar ventana:
            setOpen(false);
        // Llama a la función onClose pasada como prop para cerrar la ventana modal
            onClose();       
        };
  
    // Función no usada
    //const handleAccept = () => {
    //};
  
    const handleCancel = () => {
      handleClose();
    };
  
  
    return (
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>

                {/* Texto */}
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      {textModal.title}
                    </Typography>

                     {/* Dividir el texto en oraciones */}
                          {textModal.message.split('.').map((sentence, index) => (
                          <Typography key={index} id="modal-modal-description" sx={{ mt: 0.5 }}>
                          {sentence.trim()}
                          </Typography>
                          ))}

                {/* Botones */}
                    <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
                        {/* <Button onClick={handleAccept} sx={{ mr: 2 }}>
                          Aceptar
                        </Button> */}
                        <Button onClick={handleCancel} variant="outlined">
                          Aceptar
                        </Button>
                    </Box>
          </Box>
        </Modal>
      </div>
    );

}