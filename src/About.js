import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, useMediaQuery } from '@material-ui/core';
import meIMG from './images/me.jpg';

const useStyles = makeStyles({
    background: {
        padding: '2em 1em 2em 1em',
        height: '100vh',
    },
    title: {
        backgroundColor: '#fff',
    },
  });

const About = ({
    refSection3
}) => {
    const classes = useStyles();
    // const isMobile = useMediaQuery('(max-width: 844px)');
  return (
    <Grid container className={classes.background} ref={refSection3}>
        <Grid item xs={12} sm={6}>
            <img src={meIMG} style={{width: '90%'}} alt="Daniel Kolodziej"/>
        </Grid>
        <Grid item xs={12} sm={6}>
                <Typography variant="h2" component="h2" className={classes.title}>
                    About Me.
                </Typography> 
                <Typography variant="body1" component="p">
                    My passion is in designing, developing, and deploying web applications.  I would make a great addition to your team because of my willingness to embrace changing technologies, collaborate with others, and take on rewarding challenges. Contact info, social links, and resume found below.
                </Typography> 
        </Grid>
    </Grid>
  );
}

export default About;