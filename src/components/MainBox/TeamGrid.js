import PlayerCard from './PlayerCard';
import * as React from 'react';
import { Grid } from '@mui/material'
import Welcome from './Welcome';

function TeamGrid(props) {

  const [ teamBlueprint, setTeamBlueprint] = React.useState({ // which cards are filled:
    0: true, 1: true, 2: true, 3: true, 4: true, 5: true, 6: true, 7: true, 8: true, 9: true, 10: true, 11: true, 12: true, 13: true, 14: true
  });

  const updateTeamBlueprint = (index) => {
    teamBlueprint[index] = !teamBlueprint[index]
    setTeamBlueprint(teamBlueprint)
  }

  if (props.team == null) { return <Welcome/>
  } else if (props.team[0]) {

    return (
      <React.Fragment>
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
                <PlayerCard player={props.team[0]} index={0} updateTeamBlueprint={updateTeamBlueprint}></PlayerCard></Grid>{/* Goalkeepers */}
              <Grid item >
                <PlayerCard player={props.team[1]} index={1} updateTeamBlueprint={updateTeamBlueprint}></PlayerCard></Grid>{/* Goalkeepers */}
              
            </Grid>


            <Grid item xs={12} container justifyContent='center'>
              <Grid item/>
              <Grid item>
                <PlayerCard player={props.team[2]} index={2} updateTeamBlueprint={updateTeamBlueprint} ></PlayerCard> {/* Defenders */}
              </Grid>

              <Grid item>
                <PlayerCard player={props.team[3]} index={3} updateTeamBlueprint={updateTeamBlueprint} ></PlayerCard> {/* Defenders */}
              </Grid>

              <Grid item>
                <PlayerCard player={props.team[4]} index={4} updateTeamBlueprint={updateTeamBlueprint} ></PlayerCard> {/* Defenders */}
              </Grid>

              <Grid item>
                <PlayerCard player={props.team[5]} index={5} updateTeamBlueprint={updateTeamBlueprint} ></PlayerCard> {/* Defenders */}
              </Grid>

              <Grid item>
                <PlayerCard player={props.team[6]} index={6} updateTeamBlueprint={updateTeamBlueprint} ></PlayerCard> {/* Defenders */}
              </Grid>
              <Grid item/>
            </Grid>

            <Grid item xs={12} container justifyContent='center'>

              <Grid item>
                <PlayerCard player={props.team[7]} index={7} updateTeamBlueprint={updateTeamBlueprint} ></PlayerCard> {/* Midfielders */}
              </Grid>

              <Grid item>
                <PlayerCard player={props.team[8]} index={8} updateTeamBlueprint={updateTeamBlueprint} ></PlayerCard> {/* Midfielders */}
              </Grid>

              <Grid item>
                <PlayerCard player={props.team[9]} index={9} updateTeamBlueprint={updateTeamBlueprint} ></PlayerCard> {/* Midfielders */}
              </Grid>

              <Grid item>
                <PlayerCard player={props.team[10]} index={10} updateTeamBlueprint={updateTeamBlueprint} ></PlayerCard> {/* Midfielders */}
              </Grid>

              <Grid item>
                <PlayerCard player={props.team[11]} index={11} updateTeamBlueprint={updateTeamBlueprint} ></PlayerCard> {/* Midfielders */}
              </Grid>


            </Grid>


            <Grid item xs={12} container justifyContent='center'>
              <PlayerCard player={props.team[12]} index={12} updateTeamBlueprint={updateTeamBlueprint} ></PlayerCard> {/* Forwards */}
              <PlayerCard player={props.team[13]} index={13} updateTeamBlueprint={updateTeamBlueprint} ></PlayerCard> {/* Forwards */}
              <PlayerCard player={props.team[14]} index={14} updateTeamBlueprint={updateTeamBlueprint} ></PlayerCard> {/* Forwards */}
            </Grid>

          </Grid>

      </React.Fragment>
    );
  }
}


export default TeamGrid;