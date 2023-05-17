import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography'
import StartsFilter from './StartsFilter';
import LanguageButton from './LanguageButton';
import LevelButton from './LevelButton';
import PriceButton from './PriceButton';

export default function FiltersButton() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Typography variant="body1" color="initial">Valoraciones</Typography>
        <ListItem disablePadding>
          <StartsFilter />
        </ListItem>
      </List>

      <Divider />

      <List>
        <Typography variant="body1" color="initial">Idioma</Typography>
        <ListItem disablePadding>
          <LanguageButton />
        </ListItem>
      </List>

      <Divider />

      


      <Divider />

      <List>
        <Typography variant="body1" color="initial">Nivel</Typography>
        <ListItem disablePadding>
          <LevelButton />
        </ListItem>
      </List>

      <Divider />

      <List>
        <Typography variant="body1" color="initial">Precio</Typography>
        <ListItem disablePadding>
          <PriceButton/>
        </ListItem>
      </List>

    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} variant="contained"  sx={{ color: '#ffffff', outline: "none" }} >Filtrar</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}