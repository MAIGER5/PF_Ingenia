import { useState  }from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Stack } from '@mui/material'

import styles from "./ImagenDePerfil.module.css";

export default function ImagenDePerfil() {

    const [previewSource, setPreviewSource] = useState("");
    const [productImg, setProductImg] = useState("");

    // const CambioDeFoto=()=>{
    //     alert("cambio de foto")
    // }



    const CambioDeFoto=()=>{
      alert("cambio de foto")
        // await axios.post(`http://localhost:3001/courses/`,course)
        // .then(async (response) => {
        //     console.log(response);
        //     let id = response.data?.idCourse
        //     navigate(`/DetailCourse/${id}`)
        // }).catch((error) => {
        //     // const objetojson = error.request.response;
        //     // const objeto = JSON.parse(objetojson);
        // });
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
