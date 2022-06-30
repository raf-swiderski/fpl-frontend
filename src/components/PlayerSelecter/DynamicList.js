import * as React from 'react';
import { List, Paper } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function DynamicList(props) {

  return (

    <Paper style={{
      maxHeight: 480, 
      minWidth: 287, 
      overflow: 'auto'
    
    }}>
      <List>
          {
              props.allPlayers.map((player, index) => (
                  <ListItemButton key={index} sx={{backgroundColor: "secondary.main"}}
                  >
                      <ListItemText primary={
                          `${player.web_name} £${player.now_cost} Points: ${player.total_points}
                          `} />
                  </ListItemButton>
              ))
          }
      </List>
  </Paper>

  );
}