import { Typography } from '@mui/material';
import * as React from 'react';
import useStyles from '../../Styles';

function Welcome(props) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Typography className={classes.welcomeHeader} >Welcome</Typography>
            <Typography className={classes.welcomeContent} >
                A team builder for your Fantasy Premier League team.
                <br></br>
                Please enter your Team ID to bring up your most recent Gameweek.
                <br></br>
                To find your Team ID:
                <br></br>
                1. Open your points page on the FPL website
                <br></br>
                2. Find your FPL id in the URL after '/entry/'
                <br></br>
                Example ID's: 821650, 158434, 5143225

            
            </Typography>
        </React.Fragment>
    );
  }



export default Welcome;