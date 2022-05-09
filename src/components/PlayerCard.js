import * as React from 'react';
import { useState, useEffect } from 'react';
import { Card, CardContent, Typography } from '@mui/material'

import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
    root: {
        minWidth: 200,
        maxWidth: 250
    },
    h5: {
        fontSize: '17'
    }
})

function PlayerCard(props) {

    const classes = useStyles();

    const player = props.player;
  
    return (
      <React.Fragment>    
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
  
              Player: {props.index + 1}
  
            </Typography>
            <Typography className={classes.h5} component="div">
  
              {player.first_name} • {player.web_name}
  
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
  
              Price: {player.now_cost}
  
            </Typography>
            <Typography variant="body2">
  
              Team: {player.team_code}
              <br />
              Form: {player.form}
  
            </Typography>
          </CardContent>
        </Card>
      </React.Fragment>    
    )
}


export default PlayerCard;
