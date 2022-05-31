import { useState } from 'react';

import PlayerCard from './PlayerCard';
import * as React from 'react';
import { Grid } from '@mui/material'
import Container from '@mui/material/Container';
import theme from '../Theme';
import { ThemeProvider } from '@mui/material/styles';


function TeamGrid(props) {

  console.log('rendering component')

  if (props.team == null) {
    return <h1>Loading ...</h1>
    
  } else if (props.team[0]) {

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
                <PlayerCard player={props.team[0]}></PlayerCard></Grid>{/* Goalkeepers */}
              <Grid item >
                <PlayerCard player={props.team[1]}></PlayerCard></Grid>{/* Goalkeepers */}
              
            </Grid>


            <Grid item xs={12} container justifyContent='center'>
              <Grid item/>
              <Grid item>
                <PlayerCard player={props.team[2]}></PlayerCard> {/* Defenders */}
              </Grid>

              <Grid item>
                <PlayerCard player={props.team[3]}></PlayerCard> {/* Defenders */}
              </Grid>

              <Grid item>
                <PlayerCard player={props.team[4]}></PlayerCard> {/* Defenders */}
              </Grid>

              <Grid item>
                <PlayerCard player={props.team[5]}></PlayerCard> {/* Defenders */}
              </Grid>

              <Grid item>
                <PlayerCard player={props.team[6]}></PlayerCard> {/* Defenders */}
              </Grid>
              <Grid item/>
            </Grid>

            <Grid item xs={12} container justifyContent='center'>

              <Grid item>
                <PlayerCard player={props.team[7]}></PlayerCard> {/* Midfielders */}
              </Grid>

              <Grid item>
                <PlayerCard player={props.team[8]}></PlayerCard> {/* Midfielders */}
              </Grid>

              <Grid item>
                <PlayerCard player={props.team[9]}></PlayerCard> {/* Midfielders */}
              </Grid>

              <Grid item>
                <PlayerCard player={props.team[10]}></PlayerCard> {/* Midfielders */}
              </Grid>

              <Grid item>
                <PlayerCard player={props.team[11]}></PlayerCard> {/* Midfielders */}
              </Grid>


            </Grid>


            <Grid item xs={12} container justifyContent='center'>
              <PlayerCard player={props.team[12]}></PlayerCard> {/* Forwards */}
              <PlayerCard player={props.team[13]}></PlayerCard> {/* Forwards */}
              <PlayerCard player={props.team[14]}></PlayerCard> {/* Forwards */}
            </Grid>

          </Grid>

        </Container>
      </ThemeProvider>
    );
  }
}


export default TeamGrid;