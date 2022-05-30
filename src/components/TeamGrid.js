import { useState, useEffect } from 'react';

import PlayerCard from './PlayerCard';
import * as React from 'react';
import { Grid } from '@mui/material'
import Container from '@mui/material/Container';
import theme from '../Theme';
import { ThemeProvider } from '@mui/material/styles';


function TeamGrid() {

  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fpl-api-raf.herokuapp.com/myteam")
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
    <ThemeProvider theme={theme}>
      <Container fixed maxWidth="lg" 
      sx={{
        bgcolor: 'background',
        boxShadow: 1,
        borderRadius: 2,
        p: 2,
        minWidth: 300,
        marginTop: 3
      }}
      >

        <Grid 
        container 
        spacing={1} 
        justifyContent='center' 
        direction='row'
        alignItems='center'
        marginTop={3}
        marginBottom={5}
        >

          <Grid item xs={12} container justifyContent='center' >
            
            <Grid item >
              <PlayerCard player={team[0]}></PlayerCard></Grid>{/* Goalkeepers */}
            <Grid item >
              <PlayerCard player={team[1]}></PlayerCard></Grid>{/* Goalkeepers */}
            
          </Grid>


          <Grid item xs={12} container justifyContent='center'>
            <Grid item/>
            <Grid item>
              <PlayerCard player={team[2]}></PlayerCard> {/* Defenders */}
            </Grid>

            <Grid item>
              <PlayerCard player={team[3]}></PlayerCard> {/* Defenders */}
            </Grid>

            <Grid item>
              <PlayerCard player={team[4]}></PlayerCard> {/* Defenders */}
            </Grid>

            <Grid item>
              <PlayerCard player={team[5]}></PlayerCard> {/* Defenders */}
            </Grid>

            <Grid item>
              <PlayerCard player={team[6]}></PlayerCard> {/* Defenders */}
            </Grid>
            <Grid item/>
          </Grid>

          <Grid item xs={12} container justifyContent='center'>

            <Grid item>
              <PlayerCard player={team[7]}></PlayerCard> {/* Midfielders */}
            </Grid>

            <Grid item>
              <PlayerCard player={team[8]}></PlayerCard> {/* Midfielders */}
            </Grid>

            <Grid item>
              <PlayerCard player={team[9]}></PlayerCard> {/* Midfielders */}
            </Grid>

            <Grid item>
              <PlayerCard player={team[10]}></PlayerCard> {/* Midfielders */}
            </Grid>

            <Grid item>
              <PlayerCard player={team[11]}></PlayerCard> {/* Midfielders */}
            </Grid>


          </Grid>


          <Grid item xs={12} container justifyContent='center'>
            <PlayerCard player={team[12]}></PlayerCard> {/* Forwards */}
            <PlayerCard player={team[13]}></PlayerCard> {/* Forwards */}
            <PlayerCard player={team[14]}></PlayerCard> {/* Forwards */}
          </Grid>

        </Grid>

      </Container>
    </ThemeProvider>
  );
}





export default TeamGrid;
