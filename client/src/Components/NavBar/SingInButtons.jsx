import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function SingInButtons({ themeMode }) {
  return (
    <div 
      style={{ 
        display: "flex", 
        justifyContent: "flex-end", 
        alignItems: "center",
        columnGap: "20px",
        marginLeft: "10px",
      }}
    >
      {" "}
    
        <Button
          color="primary"
          variant="outlined"
          sx={{
            whiteSpace: "nowrap",
            mr: 2,
            color: themeMode,
            fontWeight: "400",
            fontSize: "15px",
            er: "5px solid",
            width: "165px",
          }}
          component={Link} 
          to={"/Login"}
        >
          Iniciar Sesión
        </Button>
   
        <Button
          color="primary"
          variant="contained"
          sx={{
            color: "white",
            fontWeight: "400",
            fontSize: "15px",
            width: "165px",
            boxShadow: 0,
          }}
          component={Link} 
          to={"/SignupUsuario"}
        >
          {" "}
          Registrarse
        </Button>
    </div>
  );
}
