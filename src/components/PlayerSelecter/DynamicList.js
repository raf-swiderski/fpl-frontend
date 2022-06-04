import * as React from 'react';
import Box from '@mui/material/Box';
import { List, Paper } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function DynamicList(props) {

  return (
    <Box
      sx={{ width: '100%', maxWidth: 100, bgcolor: 'background.paper' }}
    >
      <Paper style={{maxHeight: 480, minWidth: 287, overflow: 'auto'}}>
        <List>
            {
                props.allPlayers.map((player, index) => (
                    <ListItemButton key={index}>
                        <ListItemText primary={
                            `${player.web_name} £${player.now_cost}
                            `} />
                    </ListItemButton>
                ))
            }
        </List>
    </Paper>
    </Box>
  );
}