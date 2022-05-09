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

        <Grid 
        container 
        spacing={1} 
        justifyContent="space-evenly" 
        direction='row'
        alignItems='center'
        >

          <Grid item xs={12} container>
            <Grid item xs={3}/>
            <Grid item xs={2} md={1} >
              <PlayerCard player={team[0]}></PlayerCard></Grid>{/* Goalkeepers */}
            <Grid item xs={2}/>
            <Grid item xs={2} md={1} >
              <PlayerCard player={team[1]}></PlayerCard></Grid>{/* Goalkeepers */}
            <Grid item xs={3}/>
          </Grid>


          <Grid item xs={12} container>
            <Grid item xs={1}/>
            <Grid item xs={2}>
              <PlayerCard player={team[2]}></PlayerCard> {/* Defenders */}
            </Grid>

            <Grid item xs={2}>
              <PlayerCard player={team[3]}></PlayerCard> {/* Defenders */}
            </Grid>

            <Grid item xs={2}>
              <PlayerCard player={team[4]}></PlayerCard> {/* Defenders */}
            </Grid>

            <Grid item xs={2}>
              <PlayerCard player={team[5]}></PlayerCard> {/* Defenders */}
            </Grid>

            <Grid item xs={2}>
              <PlayerCard player={team[6]}></PlayerCard> {/* Defenders */}
            </Grid>
            <Grid item xs={1}/>
          </Grid>

          <Grid item xs={12} container>
            <Grid item xs={1}/>
            <Grid item xs={2}>
              <PlayerCard player={team[7]}></PlayerCard> {/* Midfielders */}
            </Grid>

            <Grid item xs={2}>
              <PlayerCard player={team[8]}></PlayerCard> {/* Midfielders */}
            </Grid>

            <Grid item xs={2}>
              <PlayerCard player={team[9]}></PlayerCard> {/* Midfielders */}
            </Grid>

            <Grid item xs={2}>
              <PlayerCard player={team[10]}></PlayerCard> {/* Midfielders */}
            </Grid>

            <Grid item xs={2}>
              <PlayerCard player={team[11]}></PlayerCard> {/* Midfielders */}
            </Grid>
            <Grid item xs={1}/>
          </Grid>

  

          <PlayerCard player={team[12]}></PlayerCard> {/* Forwards */}
          <PlayerCard player={team[13]}></PlayerCard> {/* Forwards */}
          <PlayerCard player={team[14]}></PlayerCard> {/* Forwards */}
        </Grid>


          
   
        

        

      




    </div>
  );
}





export default App;
