import * as React from "react";
import { useNavigate } from "react-router-dom";
import AvatarComponent from "../AvatarComponent/AvatarComponent";
import { auth } from "../../firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";

import Box from "@mui/material/Box";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import { Modal, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import LogoutComponent from "../LogoutComponent/LogoutCoponent";

export default function MenuAvatar({userType}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [userName, setUserName] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false); // Nuevo estado para controlar la apertura de la ventana modal
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  //TODO: Felipe
  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(user.displayName)
        console.log(user)
        setUserName(user.displayName)
      } else {
        setUserName("M")
        
      } 
      //console.log(userName);
    });
  })

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    setOpenModal(true); // Abre la ventana modal cuando se hace clic en Cerrar Sesión
  }

 


  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Cuenta de Usuario">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <AvatarComponent 
              /* name={"Luis Felipe"} */ 
              width={"32px"} 
              height={"32px"} 
              fontSize={"15px"}
            />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem 
          onClick={handleClose} 
          component={Link} 
          to="/Profile"
        > 
          <AvatarComponent             
            width={"32px"} 
            height={"32px"} 
            fontSize={"15px"}
          />
          {" "}
          <Typography variant="subtitle1" fontWeight="bold" >
            Perfil Usuario
          </Typography>
        </MenuItem>

        {userType == 1 ? (<MenuItem 
          onClick={handleClose} 
          sx={{ mt: 2 }} 
          component={Link} 
          to="/MyCourses"
        >
          Mis Cursos
        </MenuItem>) : null}

        <MenuItem 
          onClick={handleClose}  
          component={Link} 
          to="/MyCourses"
        >
          Favoritos
        </MenuItem>
        <MenuItem 
          onClick={handleClose}  
          component={Link} 
          to="/Notifications"
        >
          Notificaciones
        </MenuItem>
        <MenuItem 
          onClick={handleClose}  
          component={Link} 
          to="/Support"
        >
          Ayuda
        </MenuItem>
        <Divider />

        <MenuItem onClick={handleLogOut}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Cerrar Sesión
        </MenuItem>
      </Menu>
      {openModal && <LogoutComponent onClose={() => setOpenModal(false)} />} {/* Muestra la ventana modal si openModal es true */}
      {/* <LogoutComponent/> */}
    </React.Fragment>
  );
}
