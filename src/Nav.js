import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles({
    background: {
      backgroundImage: 'linear-gradient( 180deg, #090909 25%, #545454 130%)',
      padding: '1em',
    },
    links: {
        color: '#fff',
        marginRight: '2em',
    },
  });

const Nav = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width: 924px)');
    return (
        <Grid 
            container 
            className={classes.background} 
            justify="flex-end" 
            alignItems="center">
            <Grid item>
                <Typography variant="button" component="a" className={classes.links}>
                    Projects
                </Typography> 
            </Grid>
            <Grid item>
                <Typography variant="button" component="a" className={classes.links}>
                    Skills
                </Typography> 
            </Grid>
            <Grid item>
                <Typography variant="button" component="a" className={classes.links}>
                    About Me
                </Typography> 
            </Grid>
        </Grid>
    );
}

export default Nav;