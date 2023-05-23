import React, { useState } from "react";
import { Modal, Box, Button } from "@mui/material";

export default function ErrorModal({ errorMessage, onClose }) {
  const [modalOpen, setModalOpen] = useState(true);

  const closeModal = () => {
    setModalOpen(false);
    onClose();
  };

  return (
    <Modal open={modalOpen} onClose={closeModal}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <h2>Error</h2>
        <p>{errorMessage}</p>
        <Button onClick={closeModal}>Cerrar</Button>
      </Box>
    </Modal>
  );
}
