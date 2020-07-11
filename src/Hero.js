import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles({
    background: {
        // marginTop: '3em',
        padding: '2em 1em 2em 1em',
        height: '100vh',
    },
    upper: {
        fontSize: '9em',
        // zIndex: 2,
    },
    lower: {
        color: '#fff',
        backgroundColor: '#000',
        fontSize: '9em',
        // zIndex: 15,
    },
  });

const Hero = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width: 844px)');
    let polyPoints= "33,100 0,0 66,0";
    let polyPointsMobile= "100,100 0,0 100,0";
    return (
        <Grid 
            container 
            className={classes.background} 
            justify="center" 
            direction="column"
            alignItems="flex-end">
            <svg height="100%" width="100%" viewBox="0 0 100 100" preserveAspectRatio="none" style={{
          position: 'absolute',
          top: 54,
          left: 0,
          }}>
            <defs>
              <linearGradient id="grad" cx="75%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" style={{stopColor:'#00c480',stopOpacity:1}} />
                <stop offset="100%" style={{stopColor:'#00ffa8',stopOpacity:1}} />
              </linearGradient>
            </defs>
            <polygon points={isMobile ? polyPointsMobile : polyPoints} style={{strokeWidth:0,fill: 'url(#grad)'}} />
          </svg>
            <Grid item>
                <Typography variant="h1" component="h1" className={classes.upper}>
                    {isMobile ? 'DAN' : 'DANIEL'}
                </Typography> 
            </Grid>
            <Grid item> 
                <Typography variant="h1" component="h1" className={classes.lower}>
                    {isMobile ? 'KOLO' : 'KOLODZIEJ'}
                </Typography> 
            </Grid>
        </Grid>
    );
}

export default Hero;