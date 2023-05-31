import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Alert, Rating, Snackbar, TextField } from '@mui/material';
import RatingToBackend from '../RatingToBackend/RatingToBackend';

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
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px'
};

export default function RatingComponent({ id, valueRating, onClose }) {
    const [open, setOpen] = React.useState(true);
    const [comments, setComments] = React.useState("");
    const [rating, setRating] = React.useState(valueRating);

  const handleClose = () => {
    setOpen(false);
      // Llama a la función onClose pasada como prop para cerrar la ventana modal
        onClose();
        };

    const handleAccept = () => {
        // Crear el objeto con los valores de comentarios y calificación
            const ratingData = {
                user: parseInt(localStorage.getItem("userType"), 10),
                course: parseInt(id, 10),
                comement: comments,
                assessment: rating
            };

            console.log( ratingData);

            const data = RatingToBackend(ratingData);

            console.log(data);


        // Cierra la ventana modal
        handleClose();
    };

  const handleCancel = () => {
    // Restablecer los valores de comentarios y calificación
        setComments("");
        setRating(2.5);

    // Cierra la ventana modal
        handleClose();
  };


  return (
    <div>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
        <Box sx={style}>


            <Typography id="modal-modal-title" variant="h6" component="h2">
            ¿Cómo calificarías éste curso?
            </Typography>

            <Rating name="half-rating" value={rating} precision={0.5} size='large' onChange={(event, newValue) => setRating(newValue)}/>

            <TextField id="standard-multiline-static" label="Deja una reseña en éste espacio" multiline rows={4} defaultValue="" variant="standard" style={{ width: '100%' }}  onChange={(event) => setComments(event.target.value)}/>

            <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
                <Button onClick={handleAccept} sx={{ mr: 2 }} variant="outlined">
                Calificar
                </Button>

                <Button onClick={handleCancel} >
                Cancelar
                </Button>
            </Box>

        </Box>
      </Modal>
    </div>
  );
}