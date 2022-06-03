import * as React from 'react';
import Box from '@mui/material/Box';
import { List, Paper, Button } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';

function renderRow(props) {
  const { index, style } = props;
  

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`Item ${index + 1}`} />
      </ListItemButton>
    </ListItem>
  );
}

export default function DynamicList(props) {


  return (
    <Box
      sx={{ width: '100%', height: 400, maxWidth: 100, bgcolor: 'background.paper' }}
    >
      <Paper style={{maxHeight: 400, overflow: 'auto'}}>
        <List>
            {
                props.allPlayers.map((player, index) => (
                    <ListItemButton>
                        <ListItemText primary={`${player.first_name} .${player.web_name}`} />
                    </ListItemButton>
                ))
            }
        </List>
    </Paper>
    </Box>
  );
}