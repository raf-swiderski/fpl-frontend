import './Theme.js'
import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import TeamGrid from './components/TeamGrid';
import { ThemeProvider } from '@mui/material/styles';
import NavBar from './components/NavBar/NavBar';
import theme from './Theme.js';
import Container from '@mui/material/Container'


function App() {

  const [teamID, setTeamID] = useState(null);
  const [team, setTeam] = useState(null);
  const [allPlayers, setAllPlayers] = useState(null);
  const isMounted = useRef(false);

  const getTeamID = (id) => {
    setTeamID(id)
    isMounted.current = true;
  }

 // 821650
  
  useEffect(() => {
    if (isMounted.current) {
      fetch(`https://fpl-api-raf.herokuapp.com/myteam?id=${teamID}`)
        .then(response => response.json())
        .then(response => {
          setTeam(response)
          console.log(response)
        }
      ) 
    }
  },[teamID])
  
  useEffect(() => {

    fetch('https://fpl-api-raf.herokuapp.com/allplayers')
      .then(response => response.json())
      .then(response => {
        setAllPlayers(response)
        console.log(response)
      }
    ) 

  }, [])
  

  return (

    <ThemeProvider theme={theme}>
      <NavBar teamID={getTeamID}/>
      <Container fixed maxWidth="lg" 
        sx={{
          bgcolor: 'background',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 300,
          marginTop: 3
        }}>
            
          <TeamGrid team={team}/>{console.log('render app')}
        </Container>
    </ThemeProvider>
    

  );
}


export default App;
