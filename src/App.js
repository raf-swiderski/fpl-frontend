import './Theme.js'
import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import TeamGrid from './components/TeamGrid';
import { ThemeProvider } from '@mui/material/styles';
import NavBar from './components/NavBar/NavBar';
import theme from './Theme.js';


function App() {

  const [teamID, setTeamID] = useState(null);
  const [team, setTeam] = useState(null);
  const [isTeam, setIsTeam] = useState(false);

  const isMounted = useRef(false);
  const [loading, setLoading] = useState(true);

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
          setIsTeam("Yes!")
          console.log(response)
          setLoading(false)
        }
      ) 

    }
  },[teamID])
  

  return (

    <ThemeProvider theme={theme}>
      <NavBar teamID={getTeamID}/>
      <TeamGrid team={team} isTeam={isTeam}/>{console.log('render app')}
    </ThemeProvider>
    

  );
}


export default App;
