import ReactDOM from "react-dom";
import {  Typography } from "@mui/material";
import styles from "./LoaderPage.module.css";

export default function LoaderPage() {
  return ReactDOM.createPortal(
    <div className={styles.container}>
        <div className={styles.loader}>
            <Typography 
              variant="h5" 
              color="primary"
              sx={{ 
                fontSize:"36px", 
                fontWeight:"700", 
                marginLeft: "40px" 
              }}
            >
              Ingenia
            </Typography>
        </div>
    </div>,
    document.getElementById("loader")
  )
}
