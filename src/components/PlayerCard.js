import * as React from 'react';
import { useState, useEffect } from 'react';
import { Card, CardContent, Typography } from '@mui/material'

import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    maxWidth: 250,
    maxHeight: 130
  },
  h5: {
    fontSize: 15
  },
  content: {
    fontSize: 13
  }
})

function PlayerCard(props) {
  const classes = useStyles();
  const player = props.player;
  
  return (
    <React.Fragment>    
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 12 }} color="text.secondary" >

              {player.team_name}

          </Typography>
          <Typography className={classes.h5} component="div">

            {player.first_name} • {player.web_name}

          </Typography>
          <Typography className={classes.content} color="text.secondary">

            Price: {player.now_cost}
          </Typography>
          <Typography variant="body2">

            Form: {player.form}

          </Typography>
        </CardContent>
      </Card>
    </React.Fragment>    
  )
}


export default PlayerCard;
