import { useState  }from 'react';
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography'
import axios from 'axios'
import Button from '@mui/material/Button'
import { Stack } from '@mui/material'

import styles from "./ImagenDePerfil.module.css";

export default function ImagenDePerfil() {

    const user = useSelector((state) => state.localStorageData);
    const [previewSource, setPreviewSource] = useState("");
    const [productImg, setProductImg] = useState("");

    // const CambioDeFoto=()=>{
    //     alert("cambio de foto")
    // }

    

    console.log("este es el usuario", user);

    const CambioDeFoto= async( )=>{
      alert("cambio de foto")
        await axios.put(`${import.meta.env.VITE_HOST}/user/updatedInfo`,{ idUser: user.idUser ,imgProfile: productImg})
        .then(async (response) => {
            console.log(response);
            //navigate(`/DetailCourse/${id}`)
        }).catch((error) => {
            // const objetojson = error.request.response;
            // const objeto = JSON.parse(objetojson);
        });
  }

    const handleProductImageUpload = (e) => {
      const file = e.target.files[0];
      TransformFileData(file);
      previewFile(file)   

  
      };

  const previewFile = (file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
          setPreviewSource(reader.result);
          console.log(reader.result);
      };
  };
  
  const TransformFileData = (file) => {
      const reader = new FileReader();
  
      if (file) {
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setProductImg(reader.result);
          console.log(reader.result);
        };
      } else {
        setProductImg("");
      }
  };

  return (
    <>
    <Stack
     direction="column"
     justifyContent="center"
     alignItems="center"
     spacing={2}
    >
    <Typography variant="body1" color="initial">Añadir o cambiar imagen</Typography>
          <label 
            className={styles.inputImageLabel}
          > 
                    Seleccionar Imagen
                    <input
                        id="fileInput"
                        type="file"
                        accept="image/*"
                        onChange={handleProductImageUpload}
                       className={styles.inputImage}
                    />
          </label>
          {previewSource && (
              <img
                  src={previewSource}
                  alt="chosen"
                  style={{ 
                  height: '300px', width: '600px' 
                  }}
              />
          )} 
        <Button variant="contained" color="primary" onClick={ CambioDeFoto}>
        Subir Imagen
        </Button>
    </Stack>
    </>
  )
}
