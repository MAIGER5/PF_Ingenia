import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { filterByDate } from '../../../Redux/Actions/filterByDate';

export default function Order() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const cursos = useSelector(state => state.allCourseCategory);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
   
  };
  const handleClosereciente = () => {
    setAnchorEl(null);
    const filter=[...cursos].sort((a,b)=>new Date(a.createdAt)-new Date(b.createdAt))
    dispatch(filterByDate( filter))
  };
  const handleCloseantiguo = () => {
    setAnchorEl(null);
    const filter=[...cursos].sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt))
    dispatch(filterByDate( filter))
  };
  return (
    <div>

      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant="contained" 
        sx={{ color: '#ffffff', outline: "none", width: "100px" }}
      >
        Por fecha
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={ handleClosereciente }>Más reciente</MenuItem>
        <MenuItem onClick={ handleCloseantiguo}>Más antiguo</MenuItem>
        
      </Menu>
    </div> 
  );
}