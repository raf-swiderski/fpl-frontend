import { Button, Box } from '@mui/material';
import * as React from 'react';
import DynamicList from './DynamicList'
import ToggleSortBy from './ToggleSortBy';
import TogglePosition from './TogglePosition';

function sortPlayers(allPlayers, sortBy) {  
  return allPlayers.sort((a, b) => (a[sortBy] < b[sortBy]) ? 1 : -1)
}

function filterPlayerByPosition(allPlayers, position) {
  var newPlayers = []
  console.log(position)
  

  for (let i = 0; i < allPlayers.length; i++) {
    if (allPlayers[i].element_type === parseInt(position)) {
      newPlayers.push(allPlayers[i])
      console.log(newPlayers)
      
    }
  }
  console.log(newPlayers)
  return newPlayers
}

function PlayerSelecter(props) {

    if (props.allPlayers == null) return null

    const [allPlayers, setAllPlayers] = React.useState(props.allPlayers);
    const [sortBy, setSortBy] = React.useState(null);
    const [position, setPosition] = React.useState(null);
    const [playersByPosition, setPlayersByPosition] = React.useState(null);


    const getSortBy = (sortBy) => {
      setSortBy(sortBy)
      console.log(sortBy)

      let sorted = sortPlayers(allPlayers, sortBy)
      if (sorted != null) {
        setAllPlayers(sorted)
      }
    }

    const getPosition = (position) => {
      setPosition(position)

      let sorted = filterPlayerByPosition(allPlayers, position)
      if (sorted != null) {
        setPlayersByPosition(sorted)
      } else {
        setPlayersByPosition(null)
      }
    }
  

    return (
        <Box sx={{
            bgcolor: 'background',
            boxShadow: 3,
            borderRadius: 2,
            p: 2,
            marginTop: 3,
            minWidth: 290
          }}>

            <ToggleSortBy sortBy={getSortBy}/>
            <br></br>
            <TogglePosition position={getPosition}/>

            <DynamicList allPlayers={playersByPosition ? playersByPosition : allPlayers}/>


        </Box>
    
        
    );
  }



export default PlayerSelecter;