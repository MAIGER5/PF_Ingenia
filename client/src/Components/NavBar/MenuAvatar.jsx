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
import { useDispatch } from "react-redux";
import setActiveTab from "../../Redux/Actions/setActiveTab";

export default function MenuAvatar({userType}) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [userName, setUserName] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  //TODO: Felipe
  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        //console.log(user.displayName)
        //console.log(user)
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
    // Abre la ventana modal cuando se hace clic en "Cerrar Sesión"
    setOpenModal(true);
  }

    // Estado del Tab en Cursos/Favoritos:
    const tabSet = (activeTab) => {
      dispatch(setActiveTab(activeTab))
    }


  return (
    <React.Fragment>

      {/* Ícono principal del Avatar: */}
          <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
              <Tooltip title="Cuenta de Usuario" placement="top">
              <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true" aria-expanded={open ? "true" : undefined} >
              <AvatarComponent width={"32px"} height={"32px"} fontSize={"15px"} />
              </IconButton>
              </Tooltip>
          </Box>


      {/* Lista Despegable */}
      <Menu anchorEl={anchorEl} id="account-menu"
        open={open} onClose={handleClose} onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: { overflow: "visible", filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))", mt: 1.5,
            "& .MuiAvatar-root": { width: 32, height: 32, ml: -0.5, mr: 1, },
            "&:before": { content: '""', display: "block", position: "absolute", top: 0, right: 14, width: 10, height: 10, bgcolor: "background.paper", transform: "translateY(-50%) rotate(45deg)", zIndex: 0, },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >

          {/* Perfil de usuario */}
              <MenuItem onClick={handleClose} component={Link} to="/Profile" >
              <AvatarComponent width={"32px"} height={"32px"} fontSize={"15px"} />
              {" "}
              <Typography variant="subtitle1" fontWeight="bold" >
              Perfil Usuario
              </Typography>
              </MenuItem>

          {/* Mis Cursos */}
              {userType == 1 ? (
              <MenuItem onClick={() => { handleClose(); tabSet(0); }} component={Link} to="/MyCourses" >
              Mis Cursos
              </MenuItem>) : null}

          {/* Favoritos */}
              {userType == 1 ? (
              <MenuItem onClick={() => { handleClose(); tabSet(1); }} component={Link} to="/MyCourses" >
              Favoritos
              </MenuItem>) : null}

          {/* Ayuda */}
              <MenuItem onClick={handleClose} component={Link} to="/Support" >
              Ayuda
              </MenuItem>

          {/* División */}
              <Divider />

          {/* Cerrar Sesión */}
              <MenuItem onClick={handleLogOut}>
              <ListItemIcon>
              <Logout fontSize="small" />
              </ListItemIcon>
              Cerrar Sesión
              </MenuItem>

      </Menu>

      {/* <LogoutComponent/> */}
      {/* Muestra la ventana modal si openModal es true */}
      {openModal && <LogoutComponent onClose={() => setOpenModal(false)} />}

    </React.Fragment>
  );
}
