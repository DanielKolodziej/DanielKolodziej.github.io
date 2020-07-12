import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles({
    background: {
        padding: '2em 1em 2em 1em',
        height: '100vh',
        backgroundImage: 'linear-gradient( 180deg, #090909 0%, #00ffa8 100%)',
    },
    title: {
        backgroundColor: '#fff',
    },
    list: {
        color: '#fff',
    }
  });

const Skills = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width: 844px)');
    const skillsList = [
        'Front End Development: React, JavaScript, HTML5, CSS3/Sass',
        'Back End Development: Node/Express, Firebase, MongoDB, Python',
        'Testing/Version Control: Jest, Git',
        'Experience using: React Native, AWS, Adobe XD',
        'Understanding of general coding standards including SEO, cross-browser compatibility, and accessibility basics, and risk and information systems control (CRISC)',
    ]
    const educationList = [
        'Illinois Institute of Technology',
        '8/24/2014 To 8/15/2018',
        'GPA 3.70, Bachelors Degree',
        'Major: Information Technology & Management',
        'Specialization: Web Design & Application Development',
    ]
  return (
    <Grid container className={classes.background}>
        <Grid item xs={12} sm={6}>
            <Grid container direction="column" alignItems="flex-start">
                <Typography variant="h2" component="h2" className={classes.title}>
                    SKILLS.
                </Typography>
                <ul>
                    {skillsList.map((itm, index) => (
                        <li key={index} className={classes.list} style={{padding: isMobile ? '0.25em' : '1em'}}>
                            {itm}
                        </li>
                    ))}
                </ul>
            </Grid>
        </Grid>

        <Grid item xs={12} sm={6}>
            <Grid container direction="column" alignItems="flex-end" justify="flex-end">
                <ul dir='rtl'>
                    {educationList.map((itm, index) => (
                        <li key={index} className={classes.list} style={{padding: isMobile ? '0.25em' : '1em'}}>
                            {itm}
                        </li>
                    ))}
                </ul>
                <Typography variant="h2" component="h2" className={classes.title}>
                    .SCHOOL
                </Typography> 
            </Grid>
        </Grid>
    </Grid>
  );
}

export default Skills;