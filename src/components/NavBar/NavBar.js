import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { 
  TextField, 
  IconButton, 
  Button, 
  Typography, 
  Toolbar, 
  Box, 
  AppBar } from '@mui/material';


function NavBar(props) {

  const [ teamID, setTeamID ] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    
    props.teamID(teamID)
  }

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
          <form noValidate autoComplete='off' onSubmit={handleSubmit}>
            <TextField
            onChange={(e) => setTeamID(e.target.value)}
            required
            label="Enter Team ID"
            size="small"
            variant="outlined"
            color="secondary"
            />
            <Button color="inherit" type='submit' >Get Team</Button>
          </form>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;