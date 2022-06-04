import { Button, Box } from '@mui/material';
import * as React from 'react';
import DynamicList from './DynamicList'
import ToggleSortBy from './ToggleSortBy';

function sortPlayers(allPlayers, sortBy) {  
  return allPlayers.sort((a, b) => (a[sortBy] < b[sortBy]) ? 1 : -1)
}

function PlayerSelecter(props) {

    // if (props.teamID == null) return null
    if (props.allPlayers == null) return null

    const [allPlayers, setAllPlayers] = React.useState(props.allPlayers);
    const [sortBy, setSortBy] = React.useState(null);

    const getSortBy = (sortBy) => {
      setSortBy(sortBy)
      console.log(sortBy)

      let sorted = sortPlayers(allPlayers, sortBy)
      if (sorted != null) {
        setAllPlayers(sorted)
      }
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