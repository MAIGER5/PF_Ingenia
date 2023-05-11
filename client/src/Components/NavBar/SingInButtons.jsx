import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function SingInButtons({ themeMode }) {
  return (
    <>
      {" "}
      <Link to="/Login">
        <Button
          color="primary"
          variant="outlined"
          sx={{
            whiteSpace: "nowrap",
            mr: 2,
            color: themeMode,
            fontWeight: "bold",
            er: "5px solid",
            padding: "8px 50px",
            margin: "0 20px",
          }}
        >
          Iniciar Sesión
        </Button>
      </Link>

      <Link to="/SingUp">
        <Button
          color="primary"
          variant="contained"
          sx={{
            color: "white",
            fontWeight: "bold",
            padding: "8px 50px",
            margin: "0 20px",
          }}
        >
          {" "}
          Registrarse
        </Button>
      </Link>
    </>
  );
}
