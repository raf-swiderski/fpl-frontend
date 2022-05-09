import { useState, useEffect } from 'react';

import './App.css'

import PlayerCard from './components/PlayerCard';

import * as React from 'react';

import { Grid } from '@mui/material'




function App() {

  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      fetch("http://localhost:4000/myteam")
        .then(response => response.json())
        .then(response => {
            
          setTeam(response)
          console.log(response)
          setLoading(false)
        }
      ) 

  },[])

  if(loading) return <h1>Loading ...</h1>

  return (
    <div className="App">
      <header className="App-header">Current Team</header>

        <Grid container >
          <Grid item xs={3} >
          <PlayerCard player={team[0]} row='1'></PlayerCard> {/* Goalkeepers */}
          </Grid>
        </Grid>


          <PlayerCard player={team[1]} row='2'></PlayerCard> 
   
          <PlayerCard player={team[2]} row='2'></PlayerCard> {/* Defenders */}
          <PlayerCard player={team[3]} row='2'></PlayerCard>
          <PlayerCard player={team[4]} row='2'></PlayerCard>
          <PlayerCard player={team[5]} row='2'></PlayerCard> 
          <PlayerCard player={team[6]} row='2'></PlayerCard> 

          <PlayerCard player={team[7]} row='3'></PlayerCard> {/* Midfielders */}
          <PlayerCard player={team[8]} row='3'></PlayerCard> 
          <PlayerCard player={team[9]} row='3'></PlayerCard> 
          <PlayerCard player={team[10]} row='3'></PlayerCard> 
          <PlayerCard player={team[11]} row='3'></PlayerCard> 

          <PlayerCard player={team[12]} row='4'></PlayerCard> {/* Forwards */}
          <PlayerCard player={team[13]} row='4'></PlayerCard> 
          <PlayerCard player={team[14]} row='4'></PlayerCard> 
        

        

      




    </div>
  );
}





export default App;
