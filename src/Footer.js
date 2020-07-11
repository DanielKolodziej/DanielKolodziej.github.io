import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, useMediaQuery } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';

const useStyles = makeStyles({
    background: {
      backgroundImage: 'linear-gradient( 180deg, #090909 25%, #545454 130%)',
      padding: '1em',
    },
    links: {
        color: '#fff',
        paddingRight: '0.5em'
    },
  });

const Footer = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width: 924px)');
  return (
    <Grid container className={classes.background} justify='space-between'>
      <Grid item>
          <Typography variant="caption" component="a" className={classes.links}>
              dankolodziej3773@yahoo.com
          </Typography> 
      </Grid>
      <Grid item>
        <GitHubIcon className={classes.links}/>
        <LinkedInIcon className={classes.links}/>
        <DescriptionIcon className={classes.links}/>
      </Grid>
    </Grid>
  );
}

export default Footer;