import { Button, Box } from '@mui/material';
import * as React from 'react';
import DynamicList from './DynamicList'
import ToggleSortBy from './ToggleSortBy';


function PlayerSelecter(props) {

    // if (props.teamID == null) return null
    if (props.allPlayers == null) return null

    const [allPlayers] = React.useState(props.allPlayers);
    const [sortBy, setSortBy] = React.useState(null);

    const getSortBy = (sortBy) => {
      setSortBy(sortBy)
    }
  

    return (
        <Box sx={{
            bgcolor: 'background',
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            marginTop: 3,
            minWidth: 290
          }}>

            <ToggleSortBy sortBy={getSortBy}/>

            <DynamicList allPlayers={allPlayers}/>


        </Box>
    
        
    );
  }



export default PlayerSelecter;