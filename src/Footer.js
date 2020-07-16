import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, useMediaQuery, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';
import resume from './images/Kolodziej_Daniel_Resume.pdf';

const useStyles = makeStyles({
    background: {
      backgroundImage: 'linear-gradient( 180deg, #090909 25%, #545454 130%)',
      padding: '1em',
    },
    links: {
        color: '#fff',
        paddingRight: '0.5em',
        '&:hover':{
          color: '#00ffa8',
        },
    },
    bottomNavContainer: {
      height: 'max-content',
      backgroundColor: 'rgba(0,0,0,0)',
      '&>button': {
        color: '#fff',
        padding: '0 0 0 0.5em', 
        minWidth: 'max-content',
        '&:hover': {
          color: '#00ffa8'
        }
      }
    }
  });

const Footer = () => {
  const classes = useStyles();
  // const isMobile = useMediaQuery('(max-width: 924px)');
  return (
    <Grid container className={classes.background} justify='space-between' alignItems="center">
      <Grid item>
          <Typography variant="caption" component="a" className={classes.links}>
              dankolodziej3773@yahoo.com
          </Typography> 
      </Grid>
      <Grid item>
        {/* <a href="https://github.com/DanielKolodziej" rel="noopener"><GitHubIcon className={classes.links}/></a>
        <a href="https://www.linkedin.com/in/daniel-kolodziej-08a548141/" rel="noopener"><LinkedInIcon className={classes.links}/></a>
        <a href={resume} download><DescriptionIcon className={classes.links}/></a> */}
        <BottomNavigation showLabels className={classes.bottomNavContainer}>
          <BottomNavigationAction onClick={()=> window.open("https://github.com/DanielKolodziej", "_blank", "noopener")} label="Github" icon={<GitHubIcon fontSize='small'/>} />
          <BottomNavigationAction onClick={()=> window.open("https://www.linkedin.com/in/daniel-kolodziej-08a548141/", "_blank", "noopener")} label="LinkedIn" icon={<LinkedInIcon fontSize='small'/>} />
          <BottomNavigationAction onClick={()=> window.open(resume, "download", "noopener")} label="Resume" icon={<DescriptionIcon fontSize='small'/>} />
        </BottomNavigation>
      </Grid>
    </Grid>
  );
}

export default Footer;