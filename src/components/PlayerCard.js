import * as React from 'react';
import { Card, CardContent, Typography } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';
import theme from '../Theme';
import useStyles from '../Styles';

function PlayerCard(props) {
  const classes = useStyles();
  const player = props.player;
  
  return (
    <ThemeProvider theme={theme}> 
      <Card variant="outlined"       
      sx={{
        bgcolor: 'secondary.main',
        width: 180
      }}>
        <CardContent>
          <Typography className={classes.cardContent} color="text.secondary" >

              {player.team_name}

          </Typography>
          <Typography className={classes.cardHeader} component="div">

            {player.first_name} • {player.web_name}

          </Typography>
          <Typography className={classes.cardContent} color="text.secondary">

            £{player.now_cost}m
          </Typography>
          <Typography className={classes.cardContent} >

            Form: {player.form}

          </Typography>
        </CardContent>
      </Card>
    </ThemeProvider>    
  )
}


export default PlayerCard;
