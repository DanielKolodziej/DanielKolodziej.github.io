import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles({
    background: {
        padding: '2em',
        height: '100vh',
        backgroundColor: '#090909',
        color: '#fff',
    },
    title:{
        // backgroundImage: 'linear-gradient( 180deg, #090909 25%, #545454 130%)',
        backgroundColor: '#00ffa8',
    },
  });

const Projects = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width: 844px)');
    return (
        <Grid container className={classes.background}>
            <Grid item xs={12} md={6}>
                <Typography variant="h2" component="h2" className={classes.title}>
                    PROJECTS.
                </Typography> 
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography variant="p" component="p">
                    Gallery
                </Typography> 
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography variant="p" component="p">
                    AppName
                </Typography> 
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography variant="p" component="p">
                This section will be for a short description for each project app 
listed within the gallery.  Info on purpose, technology, and 
function.  Button below potentially will go to git repo of said 
currently being displayed within gallery slideshow.
                </Typography> 
            </Grid>
        </Grid>
    );
}

export default Projects;