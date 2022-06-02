import './Theme.js'
import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import TeamGrid from './components/TeamGrid';
import { ThemeProvider } from '@mui/material/styles';
import NavBar from './components/NavBar/NavBar';
import theme from './Theme.js';
import Container from '@mui/material/Container'
import { Box, Grid } from '@mui/material';
import getApiData from './FplApiRequests.js';

function App() {

  const [teamID, setTeamID] = useState(null);
  const [team, setTeam] = useState(null);
  const [allPlayers, setAllPlayers] = useState(null);
  const isMounted = useRef(false);

  const getTeamID = (id) => {
    setTeamID(id)
    isMounted.current = true;
  }

  useEffect(() => {
    if (isMounted.current) {
      getApiData(`https://fpl-api-raf.herokuapp.com/myteam?id=${teamID}`)
      .then(team => { setTeam(team) 
        console.log(team) })
    }
  },[teamID])
  
  useEffect(() => {
    getApiData('https://fpl-api-raf.herokuapp.com/allplayers')
    .then(allPlayers => { setAllPlayers(allPlayers)
        console.log(allPlayers) })
  }, [])
  
  return (

    <ThemeProvider theme={theme}>
      <NavBar teamID={getTeamID}/>
      <Grid container justifyContent='center'>
        <Box  
          sx={{
            bgcolor: 'background',
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            minWidth: 300,
            maxWidth: 1000,
            marginTop: 3,
            marginLeft: 2,
            marginRight: 2,
            width: 'auto' }}>
          <TeamGrid team={team}/>{console.log('render app')}
        </Box>
        <Box
          sx={{
            bgcolor: 'background',
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            marginTop: 3,
            minWidth: 290
          }}>
          List of Players
        </Box>

      </Grid>





    </ThemeProvider>   

  );
}


export default App;
