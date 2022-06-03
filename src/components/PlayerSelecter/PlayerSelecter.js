import { Button, Box } from '@mui/material';
import * as React from 'react';
import DynamicList from './DynamicList'


function PlayerSelecter(props) {

    if (props.teamID == null) return null

    const [allPlayers, setAllPlayers] = React.useState(props.allPlayers);

    return (
        <Box sx={{
            bgcolor: 'background',
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            marginTop: 3,
            minWidth: 290
          }}>


            <Button color="secondary" type='submit' style={{ padding: "8px 6px" }}>Price</Button>
            <Button color="secondary" type='submit' style={{ padding: "8px 6px" }}>Points</Button>

            <DynamicList allPlayers={allPlayers}/>


        </Box>
    
        
    );
  }



export default PlayerSelecter;