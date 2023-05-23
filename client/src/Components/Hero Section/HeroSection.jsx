import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "./HeroSection.module.css"
import { Box, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Carrusel() {
    const [index, setIndex] = useState(0);
    const images = [
      "https://res.cloudinary.com/dvvqbwhcc/image/upload/v1684628652/ingeniaAssets/Banner1_ekphfo.png",
      "https://res.cloudinary.com/dvvqbwhcc/image/upload/v1684628654/ingeniaAssets/Banner2_moaugy.png",
      "https://res.cloudinary.com/dvvqbwhcc/image/upload/v1684629197/ingeniaAssets/3_pyv0ju.png",
      "https://res.cloudinary.com/dvvqbwhcc/image/upload/v1684629198/ingeniaAssets/4_zujuar.png",
    ];
  return (
    <Box  className={styled.contenedorinicial} >
      <AnimatePresence>
        <motion.img
          className={styled.imgcarrusel}
          key={index}
          src={images[index]}
          alt="slide"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity:0 }}
          transition={{ duration: 1  }}
        
        />
      </AnimatePresence>
   
      <div>
  <motion.div
    whileHover={{ scale: 1.2 , opacity: 1 }}
    onClick={() => setIndex((index + images.length - 1) % images.length)}
    className={styled.prev}
  >
    <IconButton>
      <ArrowBackIosIcon color='secondary'/>
    </IconButton>
  </motion.div>
  <motion.div
    whileHover={{ scale: 1.2 , opacity: 1 }}
    onClick={() => setIndex((index + 1) % images.length)}
    className={styled.next}
  >
    <IconButton>
      <ArrowForwardIosIcon color='secondary'/>
    </IconButton>
  </motion.div>
</div>
     
      
    </Box>

  )
}