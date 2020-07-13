import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, useMediaQuery } from '@material-ui/core';
import {useTransition, useSpring, animated, config} from 'react-spring'
const useStyles = makeStyles({
    background: {
        // marginTop: '3em',
        padding: '2em 1em 2em 1em',
        // height: '100vh',
        height: 'calc(100vh - 56px)',
    },
    upper: {
        fontSize: '8.5em',
        // zIndex: 5,
    },
    lower: {
        color: '#fff',
        backgroundColor: '#000',
        fontSize: '8.5em',
        // zIndex: 15,
    },
    graphic: {
        position: 'absolute',
        top: 56,
        left: 0,
    },
    graphicText: {
        fontSize: '5.5px'
    }
    // subtitle: {
    //     transform: 'rotate(60deg)'
    // },
  });

const Hero = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width: 844px)');
    const isMedium = useMediaQuery('(max-width: 1100px)');
    let polyPoints= "33,100 0,0 66,0";
    let polyPointsMobile= "100,100 0,0 100,0";
    const AnimatedTypography = animated(Typography)
    const translateMobile = useSpring({
        to: [{ transform: 'translate3d(-500px,0px,0)'}, { transform: 'translate3d(0px,0px,0px)'},],
        from: { transform: 'translate3d(0px,0px,0px)'},
        config: [{ duration: 2000}, {duration: 1000}]
      })
    const zVal = useSpring({
        to: { zIndex: -1},
        from: { zIndex: 1},
        config: { duration: 2000},
      })
    // const translateTextMobile = useSpring({
    //     to: { transform: "translate(0px, 0px) rotate(45deg)"},
    //     from: { transform: "translate(-5px, -55px) rotate(45deg)"},
    //     config: {duration: 1000}
    //   })
    return (
        <Grid 
            container 
            className={classes.background} 
            justify={isMobile ? "start" : "center"}
            direction="column"
            alignItems="flex-end">
            <animated.svg 
                height="100%" 
                width="100%" 
                viewBox="0 0 100 100" 
                preserveAspectRatio="none" 
                className={classes.graphic} 
                style={zVal}
                >
            <defs>
              <linearGradient id="grad" cx="75%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" style={{stopColor:'#00c480',stopOpacity:1}} />
                <stop offset="100%" style={{stopColor:'#00ffa8',stopOpacity:1}} />
              </linearGradient>
            </defs>
            <polygon points={isMobile ? polyPointsMobile : polyPoints} style={{strokeWidth:0,fill: 'url(#grad)', zIndex: 10}} />
            {/* <text x="50" y="25" transform="rotate(45 20,29)" style={{fontSize: "5.5px"}}>Design. Develop. Deploy.</text> */}
            {
                isMedium && !isMobile? null : 
                <animated.text 
                    className={classes.graphicText} 
                    x={isMobile? "50" : "2"} 
                    y={isMobile? "25" : "15"} 
                    transform={isMobile? "rotate(45 21,30)" : "rotate(72 2,20)"}
                    // style={translateTextMobile}
                    >Design. Develop. Deploy.</animated.text>
            }
            </animated.svg>
            <Grid item>
                <AnimatedTypography variant="h1" component="h1" className={classes.upper} 
                style={translateMobile}
                >
                    {isMobile ? 'DAN' : 'DANIEL'}
                </AnimatedTypography> 
            </Grid>
            <Grid item> 
                <AnimatedTypography variant="h1" component="h1" className={classes.lower} 
                style={translateMobile}
                >
                    {isMobile ? 'KOLO' : 'KOLODZIEJ'}
                </AnimatedTypography> 
            </Grid>
            {
                isMedium && !isMobile? (
                    <Grid item> 
                        <Typography variant="h3" component="h3">
                            Design. Develop. Deploy.
                        </Typography> 
                    </Grid>
                ) : null
            }
        </Grid>
    );
}

export default Hero;