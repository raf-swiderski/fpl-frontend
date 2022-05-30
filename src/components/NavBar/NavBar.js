import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { 
  TextField, 
  IconButton, 
  Button, 
  Typography, 
  Toolbar, 
  Box, 
  AppBar} from '@mui/material';

function NavBar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color='primary' position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FPL Team Builder
          </Typography>
          <TextField
          label="Enter Team ID"
          id="outlined-size-small"
          size="small"
          variant="filled"
          color="secondary"
          />
          <Button color="inherit" >Get Team</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;