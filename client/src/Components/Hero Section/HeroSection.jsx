import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "./HeroSection.module.css"
import { Box, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Carrusel() {
    const [index, setIndex] = useState(0);
    const images = [
      "https://scontent.fbog9-1.fna.fbcdn.net/v/t39.30808-6/346104913_539103718192657_2351278473975457690_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEvsowZhmzEA_nOjqwc8v2iCznxgdTUxOULOfGB1NTE5Twt4DXXxFUloI_0SHpY20rW1SNsk8gKGw-d1CEBUpTy&_nc_ohc=bUYCBNvcC8QAX8si4mo&_nc_oc=AQl-GzqUrJzzrW5JUB_EQAN_UmJr92iWV3tktRGRlFiG_hncagQ5NWCWmvkAFjaocBoBOk6hHsGyE-hn9yYWlJml&_nc_ht=scontent.fbog9-1.fna&oh=00_AfAj9ytnBS6HbOcjPPzoLb8X2rnqu8GUpzQboksWQEKWqw&oe=6461F26A",
     "https://escuela.it/storage/course_images/imagen-curso-programacion-desde-cero-57.jpg",
    "https://edteam-media.s3.amazonaws.com/specialities/original/26d2798f-ef08-4c43-8e99-3e6e6bbce390.png",
      "https://edteam-media.s3.amazonaws.com/blogs/original/750fbc09-c98f-43cf-8386-4c509aaab937.png",
      "https://edteam-media.s3.amazonaws.com/courses/original/cdd6d2b5-2d50-49f5-8cbd-9e17f29e9ed8.jpg",
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
   
      <div >
        <motion.button whileHover={{ scale: 1.2 ,opacity:1 }}    onClick={() => setIndex((index + images.length - 1) % images.length)} className={styled.prev}>
        <IconButton >
        <ArrowBackIosIcon color='secondary'/>
        </IconButton>
        </motion.button>
        <motion.button whileHover={{ scale: 1.2 ,opacity:1   }} onClick={() => setIndex((index + 1) % images.length)} className={styled.next}>
        <IconButton >
        <ArrowForwardIosIcon color='secondary'/>
        </IconButton>
        </motion.button>
      </div>
     
      
    </Box>

  )
}