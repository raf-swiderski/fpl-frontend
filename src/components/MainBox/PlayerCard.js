import * as React from 'react';
import { Card, CardContent, Typography } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../Theme';
import useStyles from '../../Styles';
import EmptyPlayerCard from './EmptyPlayerCard'

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function PlayerCard(props) {

  const [ empty, setEmpty ] = React.useState(false)

  const classes = useStyles();
  const player = props.player;

  const handleClick = (e) => {
    setEmpty(true)
  }

  const handleReset = () => {
    setEmpty(false)
  }

  if (empty === true) {
    return <EmptyPlayerCard resetPlayerCard={handleReset} />
  }
  
  return (
    <ThemeProvider theme={theme}>

      <Card variant="outlined"       
      sx={{
        bgcolor: 'secondary.main',
        width: 180,
        minHeight: 110
      }}>
        <CardContent>
          <Typography className={classes.cardContent} color="text.secondary" >

              {player.team_name}

          </Typography>
          <IconButton 
                    onClick={handleClick}
                    sx={{
                    position: 'absolute',
                    alignSelf: 'flex-end',
                    marginTop: -4.7,
                    marginLeft: 16.4 
                }}>
            <CloseIcon />
          </IconButton> 
          <Typography className={classes.cardHeader} component="div">

            {player.first_name} {player.web_name}

          </Typography>
          <Typography className={classes.cardContent} color="text.secondary">

            £{player.now_cost}m
          </Typography>
          <Typography className={classes.cardContent} >

            PPG: {player.points_per_game}

          </Typography>

        </CardContent>
      </Card>
    </ThemeProvider>    
  )
}


export default PlayerCard;
