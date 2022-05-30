import * as React from 'react';
import { Card, CardContent, Typography } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';
import theme from '../Theme';
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    maxWidth: 250,
    maxHeight: 130
  },
  cardHeader: {
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
    <ThemeProvider theme={theme}> 
      <Card variant="outlined"       
      sx={{
        bgcolor: 'secondary.main'
      }}>
        <CardContent>
          <Typography sx={{ fontSize: 12 }} color="text.secondary" >

              {player.team_name}

          </Typography>
          <Typography className={classes.cardHeader} component="div">

            {player.first_name} • {player.web_name}

          </Typography>
          <Typography className={classes.content} color="text.secondary">

            £{player.now_cost}m
          </Typography>
          <Typography variant="body2">

            Form: {player.form}

          </Typography>
        </CardContent>
      </Card>
    </ThemeProvider>    
  )
}


export default PlayerCard;
